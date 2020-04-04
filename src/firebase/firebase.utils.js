import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCImMf7akTBJcouRLbxEmAwVGUTwJvQiew",
  authDomain: "crwn-db-b6914.firebaseapp.com",
  databaseURL: "https://crwn-db-b6914.firebaseio.com",
  projectId: "crwn-db-b6914",
  storageBucket: "crwn-db-b6914.appspot.com",
  messagingSenderId: "1053179213240",
  appId: "1:1053179213240:web:21dcaf2115c3ee729fcb4d",
  measurementId: "G-2BD9J5D9EH",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
