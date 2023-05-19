import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY, 
  authDomain:process.env.REACT_APP_AuthDomain, 
  projectId:process.env.REACT_APP_ProjectId,
  storageBucket:process.env.REACT_APP_StorageBucket,
  messagingSenderId:process.env.REACT_APP_MessagingSenderId,
  appId:process.env.REACT_APP_AppId,
  measurementId:process.env.REACT_APP_MeasurementId,
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
