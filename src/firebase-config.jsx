import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBCyzZYVAYqliQuqhxpGFz0bet4Bj5XQbY",
  authDomain: "opteq-api.firebaseapp.com",
  projectId: "opteq-api",
  storageBucket: "opteq-api.appspot.com",
  messagingSenderId: "1025631960808",
  appId: "1:1025631960808:web:4ba25e433d25c48a1fd35d",
  measurementId: "G-BRJT945ZJJ",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
