
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCWK3fLm9j_beYJ-13ZSeCEjtiZQqCKDY0",
    authDomain: "treprogetto.firebaseapp.com",
    projectId: "treprogetto",
    storageBucket: "treprogetto.appspot.com",
    messagingSenderId: "705843554805",
    appId: "1:705843554805:web:4874daf434d44127c5d8bc"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);