import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { set, signUp } from "/main.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

set('user', '');

let ids = {
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  signUp: document.getElementById('signUp'),
  signIn: document.getElementById('signIn'),
  headerGreen: document.getElementById('headerGreen'),
  headerRed: document.getElementById('headerRed'),
  authGreen: document.getElementById('authGreen'),
  authRed: document.getElementById('authRed'),
};

ids.signUp.addEventListener('click', async function() {
  signUp(ids);
});

ids.signIn.addEventListener('click', async function() {
  signIn(ids);
});
