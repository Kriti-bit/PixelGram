import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
require('dotenv').config();

var firebaseConfig = {
    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID
    apiKey: "AIzaSyCm8WmMt2CdmK_1WEPcdB4grGyAce8I99s",
    authDomain: "pixelgram-80e0b.firebaseapp.com",
    projectId: "pixelgram-80e0b",
    storageBucket: "pixelgram-80e0b.appspot.com",
    messagingSenderId: "722674977769",
    appId: "1:722674977769:web:1e7b7a9082a8be73d89978"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };