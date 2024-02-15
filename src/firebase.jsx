import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDvhiW5yy8eYSgz7AcMpYCXAYRAlRp6XFA",
    authDomain: "unichat-2ef06.firebaseapp.com",
    projectId: "unichat-2ef06",
    storageBucket: "unichat-2ef06.appspot.com",
    messagingSenderId: "713999942446",
    appId: "1:713999942446:web:95d39aad439b3c087e30bf",
  })
  .auth();
