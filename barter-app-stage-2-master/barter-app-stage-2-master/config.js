import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBDJc0LR-DTEmVMJpC7-PIMb7Hd7_2NpIQ",
  authDomain: "barter-system-app-71c6b.firebaseapp.com",
  projectId: "barter-system-app-71c6b",
  storageBucket: "barter-system-app-71c6b.appspot.com",
  messagingSenderId: "508150149321",
  appId: "1:508150149321:web:b24fc4701c554984e4dd18"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
