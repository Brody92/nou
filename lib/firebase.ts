import { initializeApp } from firebaseapp;
import { getAuth } from firebaseauth;
import { getFirestore } from firebasefirestore;
import { getStorage } from firebasestorage;

const firebaseConfig = {
  apiKey process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);

=======
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);
>>>>>>> 604c1e1869baaed54f8f3a2a5872f73b8e8a4497
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
