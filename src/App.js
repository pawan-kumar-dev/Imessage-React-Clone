import React, { useEffect } from "react";
import "./App.css";
import Imessage from "./Components/Imessage";
import { selectUser, login, logout } from "./Redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import { auth } from "./Config/firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
