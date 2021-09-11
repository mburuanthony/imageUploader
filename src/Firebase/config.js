import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2DLTulLOTuQozCieikXRSDwRlJF6YRqk",
  authDomain: "img-uploader-b6b4b.firebaseapp.com",
  projectId: "img-uploader-b6b4b",
  storageBucket: "img-uploader-b6b4b.appspot.com",
  messagingSenderId: "287595935196",
  appId: "1:287595935196:web:bd149c5974771947c80b19",
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
