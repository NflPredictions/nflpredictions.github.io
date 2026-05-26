import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { firebaseConfig, app, analytics, set, get } from "/main.js";

set('signedIn', false);
set('username', '');

let ids = {
  username: document.getElementById('username'),
  password: document.getElementById('password'),
  signUp: document.getElementById('signUp'),
  signIn: document.getElementById('signIn'),
};

ids.signUp.addEventListener('click', async function() {
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

signIn.addEventListener('click', async function() => {
    const email = emailInput.value;
    const password = passwordInput.value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        authStatus.textContent = `Signed in as: ${userCredential.user.email}`;
    } catch (error) {
        console.error('Error signing in:', error.message);
        authStatus.textContent = `Error signing in: ${error.message}`;
    }
});
