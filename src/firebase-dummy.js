import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
	// inset your keys here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
