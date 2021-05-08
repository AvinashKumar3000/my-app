
import firebase from 'firebase/app'
import 'firebase/firestore'

let config = {
    apiKey: "AIzaSyCZU3a4TQ6C7s7vlMlTfIYSfuzwkPLJXQA",
    authDomain: "myapp-f8aad.firebaseapp.com",
    projectId: "myapp-f8aad",
    storageBucket: "myapp-f8aad.appspot.com",
    messagingSenderId: "430290750056",
    appId: "1:430290750056:web:dcfad5d3538ec33ae389dd"
};

firebase.initializeApp(config);

export default firebase.firestore();