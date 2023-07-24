import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-vFdJkJtVXQZ_HS5Oxss0F48sDq6n39U",
  authDomain: "parqueadero-8ff72.firebaseapp.com",
  databaseURL: "https://parqueadero-8ff72-default-rtdb.firebaseio.com",
  projectId: "parqueadero-8ff72",
  storageBucket: "parqueadero-8ff72.appspot.com",
  messagingSenderId: "995394008356",
  appId: "1:995394008356:web:52b82c7cebabc1a31c6fb1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
