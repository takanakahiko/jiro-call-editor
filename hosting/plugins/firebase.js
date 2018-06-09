import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyD3IkHzooY906rTlnVGbe4KMj6JUiFE97E",
    authDomain: "jiro-call-editor.firebaseapp.com",
    databaseURL: "https://jiro-call-editor.firebaseio.com",
    projectId: "jiro-call-editor",
    storageBucket: "jiro-call-editor.appspot.com",
    messagingSenderId: "502598017683"
  })
}

export default firebase
