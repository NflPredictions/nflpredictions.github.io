import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { auth, set, get, sleep } from "/main.js";

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
  const email = ids.email.value;
  const password = ids.password.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);
    set('user', userCredential);
    ids.authGreen.textContent = `Signed up as: ${userCredential.user.email}`;
    ids.headerGreen.style.display = 'flex';
    await sleep(3000);
    ids.headerGreen.style.display = 'none';
  } catch (error) {
    ids.authRed.textContent = `Error signing up: ${error.message}`;
    console.error('Error signing up:', error.message);
    ids.headerRed.style.display = 'flex';
    await sleep(3000);
    ids.headerRed.style.display = 'none';
  }
});

signIn.addEventListener('click', async function() {
  const email = ids.email.value;
  const password = ids.password.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    set('user', userCredential);
    console.log('User signed in:', userCredential.user);
    window.location.href = 'leagues';
  } catch (error) {
    console.error('Error signing in:', error.message);
    ids.authRed.textContent = `Error signing in: ${error.message}`;
    ids.headerRed.style.display = 'flex';
    await sleep(3000);
    ids.headerRed.style.display = 'none';
  }
});
