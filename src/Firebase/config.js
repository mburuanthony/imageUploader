import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
