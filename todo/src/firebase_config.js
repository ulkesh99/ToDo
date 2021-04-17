import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyARhDPQcwcf0z78uO0P1JieopLjWHkgMyE",
    authDomain: "todo-70c9d.firebaseapp.com",
    projectId: "todo-70c9d",
    storageBucket: "todo-70c9d.appspot.com",
    messagingSenderId: "136317602919",
    appId: "1:136317602919:web:75f5ff1e59468baea058c2"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export{db};