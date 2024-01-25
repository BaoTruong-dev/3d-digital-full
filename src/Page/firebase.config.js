// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: "AIzaSyCvnSE6j22XiCrkglnd6Ldy00_98FSDPy4",
//   authDomain: "final-f0512.firebaseapp.com",
//   projectId: "final-f0512",
//   storageBucket: "final-f0512.appspot.com",
//   messagingSenderId: "704251119830",
//   appId: "1:704251119830:web:9313328d292dc486c7a177",
//   measurementId: "G-PXFK2MB76W",
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAorerV_5XMOXPN-TmyPIt9_696M0j004Y',
  authDomain: 'send-otp-908bf.firebaseapp.com',
  projectId: 'send-otp-908bf',
  storageBucket: 'send-otp-908bf.appspot.com',
  messagingSenderId: '28443086821',
  appId: '1:28443086821:web:078ed1f26e34b5e07c690c',
  measurementId: 'G-31R2D67HN1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "it";

export default auth;
