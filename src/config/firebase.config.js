import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyCr-4ZgwBDzI-TWDm4kvW0YMmmOorv6FAs",
  authDomain: "react-native-2da65.firebaseapp.com",
  projectId: "react-native-2da65",
  storageBucket: "react-native-2da65.appspot.com",
  messagingSenderId: "686740060358",
  appId: "1:686740060358:web:aaafcce32d160ba30effc7",
  measurementId: "G-RM2S22YKKN"
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


