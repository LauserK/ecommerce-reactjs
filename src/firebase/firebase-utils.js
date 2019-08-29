import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_awf9nxi6oNo8XCVbTXzlN_AWYfeqHsI",
  authDomain: "ecommerce-db-9d1b2.firebaseapp.com",
  databaseURL: "https://ecommerce-db-9d1b2.firebaseio.com",
  projectId: "ecommerce-db-9d1b2",
  storageBucket: "",
  messagingSenderId: "12650930304",
  appId: "1:12650930304:web:948b45acdb882024"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
