import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";

// Firebase config - it is supposed to be public info.
// That's why is a must to edit firebase security rules.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const gluggiProject = firebase.initializeApp(config);

// Collections
export const PRODUCTS = "products";
export const REVIEWS = "reviews";

// Accessible firebase services via exports
// It's important that firebase is initialized only once
export const gluggiFirestore = gluggiProject.firestore();
export const gluggiAuth = gluggiProject.auth();
export const gluggiStorage = gluggiProject.storage();
export const gluggiFunctions = gluggiProject.functions();
