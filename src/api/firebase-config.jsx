import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB96eR7X4PgMsFwRkPMAtkk9qteTekzLMc",
    authDomain: "c3eth-api.firebaseapp.com",
    databaseURL: "https://c3eth-api-default-rtdb.firebaseio.com",
    projectId: "c3eth-api",
    storageBucket: "c3eth-api.appspot.com",
    messagingSenderId: "285618807531",
    appId: "1:285618807531:web:7619bb4dcb9aac107954ae",
    measurementId: "G-GWK51PYDYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)