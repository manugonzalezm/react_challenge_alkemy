import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5_YahBEXcASqqIvHe2_2Uaj6IKe0wWPA",
    authDomain: "superhero-team-alkemy.firebaseapp.com",
    projectId: "superhero-team-alkemy",
    storageBucket: "superhero-team-alkemy.appspot.com",
    messagingSenderId: "774648438781",
    appId: "1:774648438781:web:0720c0eb790a09bf57c394"
};

//Hace que Firebase quede conectado a la app de la consola
const getApp = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    //Retorna el acceso al servicio firestore
    return firebase.firestore(getApp)
}