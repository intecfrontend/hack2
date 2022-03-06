// import * as firebase from "firebase";
// import "@firebase/auth";
// import "@firebase/firestore";
// //https://rnfirebase.io/
// //18.13 and 1.10
// // › Open in the web browser...
// // › Press ? │ show all commands
// // Web Bundling complete 7176ms
// // ./FireBase.js:1
// // Module not found: Can't resolve 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyDoTjAs8bsVXqE_XQJKcSbKUlet9nCks44",
//   authDomain: "signal-clone-yt-build-39d44.firebaseapp.com",
//   projectId: "signal-clone-yt-build-39d44",
//   storageBucket: "signal-clone-yt-build-39d44.appspot.com",
//   messagingSenderId: "485075696626",
//   appId: "1:485075696626:web:f758c709f66976365b096b"
// };

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();
// export { db, auth };


import {initializeApp} from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoTjAs8bsVXqE_XQJKcSbKUlet9nCks44",
  authDomain: "signal-clone-yt-build-39d44.firebaseapp.com",
  projectId: "signal-clone-yt-build-39d44",
  storageBucket: "signal-clone-yt-build-39d44.appspot.com",
  messagingSenderId: "485075696626",
  appId: "1:485075696626:web:f758c709f66976365b096b"
};

// let app = initializeApp(firebaseConfig);
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };