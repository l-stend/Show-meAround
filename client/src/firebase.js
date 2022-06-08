import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyDfDFMSuZA4LjLPM6R8FMuaMWOf0bH3pp0',
  authDomain: 'show-mearound-52768.firebaseapp.com',
  projectId: 'show-mearound-52768',
  storageBucket: 'show-mearound-52768.appspot.com',
  messagingSenderId: '279690980696',
  appId: '1:279690980696:web:9d9c3310d6d8c627a5092d',
});

export const auth = getAuth(app);
export default app;
