import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase Configuration (Replace with your Firebase credentials)
const firebaseConfig = {
  apiKey: 'AIzaSyD2BoYDqASr9o3JXglxggfRN8x-0haKcJw',
  authDomain: 'task-manager-4798e.firebaseapp.com',
  databaseURL:
    'https://task-manager-4798e-default-rtdb.firebaseio.com',
  projectId: 'task-manager-4798e',
  storageBucket: 'task-manager-4798e.firebasestorage.app',
  messagingSenderId: '880397608558',
  appId: '1:880397608558:web:1a2ddb504d74ba4fbae87f',
  measurementId: 'G-36FCZ6PES3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
