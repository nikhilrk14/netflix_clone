import firebase from "firebase";
//authentication

import "firebase/auth";
import "firebase/database";
//realtime database
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDglbtHHB6SYeGFBq9AWVbhrBl0WhC2PTI",
  authDomain: "netflix-clone-95fa5.firebaseapp.com",
  projectId: "netflix-clone-95fa5",
  storageBucket: "netflix-clone-95fa5.appspot.com",
  messagingSenderId: "100821268761",
  appId: "1:100821268761:web:05a6962e1babdb58d96d88",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
