// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRRsJ9vM1CgzcweqZQ5cqID4WkVtR7EQs",
  authDomain: "dts4a-35-final.firebaseapp.com",
  projectId: "dts4a-35-final",
  storageBucket: "dts4a-35-final.appspot.com",
  messagingSenderId: "163722032945",
  appId: "1:163722032945:web:935e948db68ccf1b076210",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Function for registration
const registrationUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("success ", userCredential.user);
  } catch (error) {
    console.log(error);

    console.log("error code auth", error.code);
    console.log("error message auth", error.message);
  }
};

// Function for Sign In
const signInUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("success ", userCredential.user);
  } catch (error) {
    console.log(error);
    console.log("error code auth", error.code);
    console.log("error message auth", error.message);
  }
};

// Function reset password
const resetPassword = async (email) => {
  // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (error) {
    console.log(error);
  }
};

// Function for Sign out
const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export {
  auth,
  registrationUserWithEmailAndPassword,
  signInUserWithEmailAndPassword,
  resetPassword,
  signOutUser,
};
