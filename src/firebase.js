import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdDzUhP67RuVx3hvgIUhD6Q652WTsU1_M",
  authDomain: "classnotes-11f95.firebaseapp.com",
  databaseURL: "https://classnotes-11f95-default-rtdb.firebaseio.com",
  projectId: "classnotes-11f95",
  storageBucket: "classnotes-11f95.appspot.com",
  messagingSenderId: "785847190663",
  appId: "1:785847190663:web:673e04e281bb619d756422",
  measurementId: "G-BZTFHEF30N",
});

const db = firebaseApp.firestore();

export default db;
