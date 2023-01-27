// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBOonqpyISM8IMoVzb1Vza4HGeV_E3MG9Y",
    authDomain: "proyetobimestral1wedsport.firebaseapp.com",
    projectId: "proyetobimestral1wedsport",
    storageBucket: "proyetobimestral1wedsport.appspot.com",
    messagingSenderId: "665612991789",
    appId: "1:665612991789:web:82a3f828d8cf057b1e27a4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app); 

  export const obtenerProducto = () => getDocs(collection(db,"productosWed"));