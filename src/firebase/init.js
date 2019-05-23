import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBt01fKNR1EPyyGQCBAix4sKMtY9LHs8Go",
  authDomain: "ninja-smoothies-461bd.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-461bd.firebaseio.com",
  projectId: "ninja-smoothies-461bd",
  storageBucket: "ninja-smoothies-461bd.appspot.com",
  messagingSenderId: "1062011653574",
  appId: "1:1062011653574:web:92926b5ce120cbef"
};
const firebaseApp = firebase.initializeApp(config);

//export firestore database
export default firebaseApp.firestore()
