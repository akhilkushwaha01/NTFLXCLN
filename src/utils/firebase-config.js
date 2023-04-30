import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1eFn5v8PF-qXrG8LZFYsO5Tqz6Kmg6pw",
  authDomain: "react-netflix-clone-cedb5.firebaseapp.com",
  projectId: "react-netflix-clone-cedb5",
  storageBucket: "react-netflix-clone-cedb5.appspot.com",
  messagingSenderId: "631382113128",
  appId: "1:631382113128:web:d305063e4d704483cb34dd",
  measurementId: "G-JG9J0HFRZ4"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);