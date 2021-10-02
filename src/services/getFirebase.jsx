import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC42_AzCFAyKIV6gBaHLdfMvCPqTmruhsY",
    authDomain: "fir-desafio-da992.firebaseapp.com",
    projectId: "fir-desafio-da992",
    storageBucket: "fir-desafio-da992.appspot.com",
    messagingSenderId: "1095831148783",
    appId: "1:1095831148783:web:6cd9bf27aabbbf5ef4a31a",
    measurementId: "G-RGN3VPCPGJ"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirebase(){
      return app
  }

  export function getFirestore(){
      return firebase.firestore(app)
  }