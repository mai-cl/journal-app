import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAHLNv7aoVRpCi9TuPJO4EZBTA-FMdgKG8',
  authDomain: 'journal-app-react-c023a.firebaseapp.com',
  projectId: 'journal-app-react-c023a',
  storageBucket: 'journal-app-react-c023a.appspot.com',
  messagingSenderId: '328859290999',
  appId: '1:328859290999:web:488964f4fa04c437cce572',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Referencia a la base de datos
const db = firebase.firestore()

// Auth provider para la auth con Google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db, googleAuthProvider, firebase
}