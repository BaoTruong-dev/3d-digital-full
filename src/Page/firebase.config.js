// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDcsF2XqSTNUL6dYzdV2Pu9r0CY0jnvjQo",
  authDomain: "test-b8210.firebaseapp.com",
  projectId: "test-b8210",
  storageBucket: "test-b8210.appspot.com",
  messagingSenderId: "441444184494",
  appId: "1:441444184494:web:0ddb388b2915bc4e6b983f",
  measurementId: "G-EY6B9Y5K5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "it";

export default auth;
