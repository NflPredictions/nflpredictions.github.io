import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { auth, db, set, get, sleep } from "/main.js";
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


async function createUser(userID, userData) {
  try {
    const docRef = doc(db, 'users', userID);
    await setDoc(docRef, userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error.message);
  }
}

ids.signUp.addEventListener('click', async function() {
  const email = ids.email.value;
  const password = ids.password.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);
    set('user', userCredential);

    const userData = {
      name: userCredential.user.email.substring(0, userCredential.user.email.indexOf('@')),
      leagues: {league: {}},
    };
    await createUser(userCredential.user.uid, userData);
    
    ids.authGreen.textContent = `Signed up as: ${userCredential.user.email}`;
    ids.headerGreen.classList.add('show');
    await sleep(3000);
    ids.headerGreen.classList.remove('show');
  } catch (error) {
    console.error('Error signing up:', error.message);
    ids.authRed.textContent = `Error signing up: ${error.message}`;
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
});

ids.signIn.addEventListener('click', async function() {
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
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
});
