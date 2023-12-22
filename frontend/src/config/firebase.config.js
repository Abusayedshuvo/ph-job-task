// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW1QajzBzV-SrXdvMhtzm4TeAOAJZJxig",
  authDomain: "ph-job-task-7f527.firebaseapp.com",
  projectId: "ph-job-task-7f527",
  storageBucket: "ph-job-task-7f527.appspot.com",
  messagingSenderId: "1036532037453",
  appId: "1:1036532037453:web:99b2072a3c147bea3ae904",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
