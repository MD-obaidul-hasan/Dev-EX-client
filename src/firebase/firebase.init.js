
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHMNd5RKrFYSq0VVlNO0DNvUiWMH-EVUE",
  authDomain: "dev-ex-c9c36.firebaseapp.com",
  projectId: "dev-ex-c9c36",
  storageBucket: "dev-ex-c9c36.appspot.com",
  messagingSenderId: "625163155533",
  appId: "1:625163155533:web:1304932d70ab3060fd0404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;