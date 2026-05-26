import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { firebaseConfig, app, analytics, set, get } from "/main.js";

set('signedIn', false);
set('username', '');

let ids = {
  username: document.getElementById('username'),
  password: document.getElementById('password'),
  signUp: document.getElementById('signUp'),
  signIn: document.getElementById('signIn'),
};

ids.signIn.addEventListener('click', async function() {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      authStatus.textContent = `Signed up as: ${userCredential.user.email}`;
  } catch (error) {
      console.error('Error signing up:', error.message);
      authStatus.textContent = `Error signing up: ${error.message}`;
  }
});
