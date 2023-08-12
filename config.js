

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2JC72bCTk3k8t1aa81J9JIsd4g0mMk4c",
  authDomain: "diallapp-574cb.firebaseapp.com",
  databaseURL: "https://diallapp-574cb-default-rtdb.firebaseio.com",
  projectId: "diallapp-574cb",
  storageBucket: "diallapp-574cb.appspot.com",
  messagingSenderId: "555709554780",
  appId: "1:555709554780:web:d48b1cf6f1504574110699"
};

// let firebaseApp;

// try {
//     firebaseApp = initializeApp(firebaseConfig);
//     console.log("Firebase initialized successfully");
//   } catch (error) {
//     console.error("Firebase initialization failed:", error);
//   }


const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };

  

