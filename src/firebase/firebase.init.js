
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDslWQ5tfELZ6BGQ4YfilqG1Xkj589W5-8",
  authDomain: "dex-ex.firebaseapp.com",
  projectId: "dex-ex",
  storageBucket: "dex-ex.appspot.com",
  messagingSenderId: "698436113088",
  appId: "1:698436113088:web:1d6d5bca3c0705d59a5325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;