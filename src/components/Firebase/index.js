// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCenksJw57-TY1363jHBP3NmULjmwZwbRY",
  authDomain: "cerveceria-f7c09.firebaseapp.com",
  projectId: "cerveceria-f7c09",
  storageBucket: "cerveceria-f7c09.appspot.com",
  messagingSenderId: "1031229614204",
  appId: "1:1031229614204:web:841c67183b20b6cca181f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getData devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);

export default getData;