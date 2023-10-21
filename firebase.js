import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1gZ-0aexxOCiN7uCdYfk_ROFDMVJ1-d4",
  authDomain: "booking-project-ad165.firebaseapp.com",
  projectId: "booking-project-ad165",
  storageBucket: "booking-project-ad165.appspot.com",
  messagingSenderId: "377668845805",
  appId: "1:377668845805:web:24f1a688e834ea65bbcce4",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
