// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfpJgjj0TjdVhJkizzyUH3kkElomDZOeY",
  authDomain: "loja-escolar.firebaseapp.com",
  projectId: "loja-escolar",
  storageBucket: "loja-escolar.firebasestorage.app",
  messagingSenderId: "214864008806",
  appId: "1:214864008806:web:8595476773a48a2003bfa7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
