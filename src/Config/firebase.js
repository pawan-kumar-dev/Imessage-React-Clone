import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVT0vSY_hulb6Fg7oRwIjGLiPjgl_HB2M",
  authDomain: "imessage-react-clone.firebaseapp.com",
  databaseURL: "https://imessage-react-clone.firebaseio.com",
  projectId: "imessage-react-clone",
  storageBucket: "imessage-react-clone.appspot.com",
  messagingSenderId: "316303069720",
  appId: "1:316303069720:web:a427dec328821e53e2296d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;
