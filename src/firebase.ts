import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLatVgujYF_OpfK_s4K6Vdw6AUmJKwJ58",
  authDomain: "betonit-bf8e2.firebaseapp.com",
  projectId: "betonit-bf8e2",
  storageBucket: "betonit-bf8e2.appspot.com",
  messagingSenderId: "649970985829",
  appId: "1:649970985829:web:b4df5ad32c44a2c610cf8c",
  measurementId: "G-0L65STSQFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



