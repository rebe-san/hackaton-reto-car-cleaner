
 import * as firebase from 'firebase/firebase-app'
//  const firebaseConfig = { 

//     apiKey: process.env.API_KEY, 
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET, 
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID };
        
        
//         firebase.initializeApp(firebaseConfig); 
//         // let db = firebase.firestore();

//         export default firebaseConfig;
const firebaseConfig = {
    apiKey: "AIzaSyCvSHU1Jm15KTntTRa3OS6uzyrx-21tZdw",
    authDomain: "car-cleaner-hackaton.firebaseapp.com",
    databaseURL: "https://car-cleaner-hackaton.firebaseio.com",
    projectId: "car-cleaner-hackaton",
    storageBucket: "car-cleaner-hackaton.appspot.com",
    messagingSenderId: "37811360249",
    appId: "1:37811360249:web:e27496e1bd57e9c4a12d28"
  };
        firebase.initializeApp(firebaseConfig); 

          export default firebaseConfig;

