
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBpngPJObX8dO__rantT5B5GUiCIHD4NTo",
  authDomain: "fotogrid-f721f.firebaseapp.com",
  databaseURL: "https://fotogrid-f721f.firebaseio.com",
  projectId: "fotogrid-f721f",
  storageBucket: "fotogrid-f721f.appspot.com",
  messagingSenderId: "144160098659",
  appId: "1:144160098659:web:55d200b9ff630fbed96b56",
  measurementId: "G-2YJ18LXKXS"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
  
