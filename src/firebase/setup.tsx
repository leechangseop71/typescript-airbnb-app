// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDMCK4fytQZ-OwuMY3m8tZAqlvfZxWurNY",
  authDomain: "airbnb-clone-6bc3a.firebaseapp.com",
  projectId: "airbnb-clone-6bc3a",
  storageBucket: "airbnb-clone-6bc3a.appspot.com",
  messagingSenderId: "933428158478",
  appId: "1:933428158478:web:67efb02fe8b274077b9c5f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()