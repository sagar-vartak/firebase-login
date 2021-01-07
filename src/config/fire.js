import firebase from "firebase/app";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDNjl2lbZhzUgYto6AggGgxsq6by5L0uT0",
  authDomain: "login-signup-b1207.firebaseapp.com",
  projectId: "login-signup-b1207",
  storageBucket: "login-signup-b1207.appspot.com",
  messagingSenderId: "192653787029",
  appId: "1:192653787029:web:2fd79f944b23fe8c0c009c",
  measurementId: "G-5YX0QDN2K4",
};

const fire = firebase.initializeApp(config);
export default fire;
