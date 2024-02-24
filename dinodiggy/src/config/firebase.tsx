// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth" 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAukIAlg2Y4JN5Z0tkrdv-KPtE8mTYdFI8",
  authDomain: "diggydinoco.firebaseapp.com",
  projectId: "diggydinoco",
  storageBucket: "diggydinoco.appspot.com",
  messagingSenderId: "247509914611",
  appId: "1:247509914611:web:45f3f17cec2de441f97886",
  measurementId: "G-MLNY37ZLRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider  = new GoogleAuthProvider()
const analytics = getAnalytics(app);