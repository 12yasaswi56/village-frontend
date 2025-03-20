// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACtSvapA9qCClP1Ogwe45S0D40pB0d9ps",
    authDomain: "sushma-7913d.firebaseapp.com",
    projectId: "sushma-7913d",
    storageBucket: "sushma-7913d.firebasestorage.app",
    messagingSenderId: "803221794050",
    appId: "1:803221794050:web:da879998d33a0020b5a61b",
    measurementId: "G-49M06NNN75"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};

export { auth, googleProvider, signInWithGoogle, logout };


