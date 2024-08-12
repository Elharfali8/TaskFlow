// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNgSf3cScXmpZRKn7QifNdRG8cxAjo7k8",
  authDomain: "taskflow-a7f72.firebaseapp.com",
  projectId: "taskflow-a7f72",
  storageBucket: "taskflow-a7f72.appspot.com",
  messagingSenderId: "510204628475",
  appId: "1:510204628475:web:baaf1afe7b58ae4dfbcf5e",
  measurementId: "G-E2YCT8TKYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)