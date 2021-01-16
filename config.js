import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBn8OVUtLysFGQb3iDj_HgcEfz9-XA8Mvg",
    authDomain: "story-hub-33268.firebaseapp.com",
    projectId: "story-hub-33268",
    storageBucket: "story-hub-33268.appspot.com",
    messagingSenderId: "206822309140",
    appId: "1:206822309140:web:5b141a414a5836f4d11601"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();