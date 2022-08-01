import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyDwVIHoSfnEkvcIHWr4ihkDanuaO4X2ckU",
    authDomain: "cpay-67cfa.firebaseapp.com",
    projectId: "cpay-67cfa",
    storageBucket: "cpay-67cfa.appspot.com",
    messagingSenderId: "393929492789",
    appId: "1:393929492789:web:2b9307aa5e9963446ee47c"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)