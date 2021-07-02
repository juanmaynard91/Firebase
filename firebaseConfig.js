"use strict"

const firebaseConfig = {
    apiKey: "AIzaSyCSptIldaQENLcfsNDknib_FEtYR1m7e0o",
    authDomain: "vue-3-crud-b1831.firebaseapp.com",
    projectId: "vue-3-crud-b1831",
    storageBucket: "vue-3-crud-b1831.appspot.com",
    messagingSenderId: "252825512014",
    appId: "1:252825512014:web:2b4d9b106e903aa6fb7b1f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();// firestore() acceso a firestore