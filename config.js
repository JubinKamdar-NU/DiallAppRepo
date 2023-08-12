

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 Your Firebase Config
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

  

