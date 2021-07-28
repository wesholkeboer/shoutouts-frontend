import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3Wju740EIxmz_j-_7RDzQ841_soWetLI",
  authDomain: "fir-lab-73ad3.firebaseapp.com",
  projectId: "fir-lab-73ad3",
  storageBucket: "fir-lab-73ad3.appspot.com",
  messagingSenderId: "277673072686",
  appId: "1:277673072686:web:be90a3ce93b4d97b0627bf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

export function signInWithGoogle(): void {
  firebase.auth().signInWithPopup(authProvider);
}
export function signOut(): void {
  firebase.auth().signOut();
}
