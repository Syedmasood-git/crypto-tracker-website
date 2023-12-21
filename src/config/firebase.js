import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzRRbLLehdR9TYSbtvIBQMFL7g5ylSE3c",
  authDomain: "crypto-tracker-7e3f6.firebaseapp.com",
  projectId: "crypto-tracker-7e3f6",
  storageBucket: "crypto-tracker-7e3f6.appspot.com",
  messagingSenderId: "360897450682",
  appId: "1:360897450682:web:049ae3f13d77a53522a883",
  measurementId: "G-62HSF3N9WE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app)
export {db,auth,provider,doc,setDoc}