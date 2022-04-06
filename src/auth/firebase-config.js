import { initializeApp } from 'firebase/app';

import {getAuth} from"firebase/auth"
;const firebaseConfig = {
  apiKey: "AIzaSyA4wgSWEa-1LOBEm7MqM-LH8OAkOHTMapQ",
  authDomain: "movie-app-32e6b.firebaseapp.com",
  projectId: "movie-app-32e6b",
  storageBucket: "movie-app-32e6b.appspot.com",
  messagingSenderId: "622645954583",
  appId: "1:622645954583:web:2f70a23e886eb5e162f452"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);