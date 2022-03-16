import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCLEieY8sviN4Fav8cbF5OTEm78Jze-I0k",
  authDomain: "appgreat-search.firebaseapp.com",
  projectId: "appgreat-search",
  storageBucket: "appgreat-search.appspot.com",
  messagingSenderId: "789034195404",
  appId: "1:789034195404:web:a9ca18a3d75e34114ee569"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();

export { auth, googleProvider };
export default firebaseApp;