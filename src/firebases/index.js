// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUwrnBAY10e8LsyFg6A8RrnYVKDRJPW0A",
    authDomain: "learn-vue-53df4.firebaseapp.com",
    projectId: "learn-vue-53df4",
    storageBucket: "learn-vue-53df4.appspot.com",
    messagingSenderId: "214163821412",
    appId: "1:214163821412:web:d2cc7d5109ec3b09012071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }