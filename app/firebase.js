import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBltgMqegSD0l0L44iPq9SZkUBv-YbQM5A",
    authDomain: "webberwisely.firebaseapp.com",
    databaseURL: "https://webberwisely.firebaseio.com",
    projectId: "webberwisely",
    storageBucket: "webberwisely.appspot.com",
    messagingSenderId: "400835425808"
};
firebase.initializeApp(config);
export default firebase;
