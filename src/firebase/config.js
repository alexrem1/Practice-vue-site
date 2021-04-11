import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByY9gDGN62IxXfsleWTzSizyQt6wCQqjE",
  authDomain: "practice-7531a.firebaseapp.com",
  projectId: "practice-7531a",
  storageBucket: "practice-7531a.appspot.com",
  messagingSenderId: "946965221276",
  appId: "1:946965221276:web:4f6381cc178cee37134259",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
firebase.firestore().settings({ experimentalForceLongPolling: true });

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
