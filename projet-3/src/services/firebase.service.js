import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyD4tiofiBnYpIqVnFgBOIhhQlHACV1wu5s',
  authDomain: 'proyecto3-1af75.firebaseapp.com',
  projectId: 'proyecto3-1af75',
  storageBucket: 'proyecto3-1af75.appspot.com',
  messagingSenderId: '80242065428',
  appId: '1:80242065428:web:26135e1276b76ced38a701',
  measurementId: "G-FRH1L4QL2R"
}

const fire = initializeApp(firebaseConfig)


export {fire}