import { DomainDisabled } from "@material-ui/icons";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB53Puxc_X9Ty7QP2ljYVnVDiv2zMnEdvY",
  authDomain: "textme-kenan.firebaseapp.com",
  databaseURL: "https://textme-kenan.firebaseio.com",
  projectId: "textme-kenan",
  storageBucket: "textme-kenan.appspot.com",
  messagingSenderId: "649525528808",
  appId: "1:649525528808:web:2be56e0f31b5fd2e42a15d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
