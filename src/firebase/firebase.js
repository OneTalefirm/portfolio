// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnLfjWkCgZkpDH2vFsPis6-AbJVK_YV_w",
  authDomain: "practise-project-697d9.firebaseapp.com",
  projectId: "practise-project-697d9",
  storageBucket: "practise-project-697d9.firebasestorage.app",
  messagingSenderId: "157448764605",
  appId: "1:157448764605:web:2dfbe9258c611e35bacbd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };