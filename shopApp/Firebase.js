import firebase from 'react-native-firebase';
// import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAnh_ky1drCZgF0wnoyLEBluKYGyNP3ua8",
    authDomain: "shopapp-7fcf0.firebaseapp.com",
    databaseURL: "https://shopapp-7fcf0.firebaseio.com",
    projectId: "shopapp-7fcf0",
    storageBucket: "shopapp-7fcf0.appspot.com",
    messagingSenderId: "310806072145"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;