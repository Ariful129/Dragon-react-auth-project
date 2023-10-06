// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {


  apiKey: import.meta.env.VITE_PAPIKET,
  authDomain:import.meta.env.AuthDomain ,
  projectId: import.meta.env.ProjectId,
  storageBucket: import.meta.env.StorageBucket,
  messagingSenderId: import.meta.env.MessagingSenderId,
  appId: import.meta.env.AppId

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;