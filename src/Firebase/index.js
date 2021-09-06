// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXZqt2E1Bt1eyhJZG8OCEQXMKJiVwW5I8",
  authDomain: "ecommercecerveceria1930.firebaseapp.com",
  projectId: "ecommercecerveceria1930",
  storageBucket: "ecommercecerveceria1930.appspot.com",
  messagingSenderId: "546952037999",
  appId: "1:546952037999:web:fe5a306437b258d049af9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

export const getData = () => getFirestore(app);

export {auth}