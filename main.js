import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCictD2QgC4sK-GTqpFeLOiDJucCziVjeE",
  authDomain: "nflpredictions-339cb.firebaseapp.com",
  projectId: "nflpredictions-339cb",
  storageBucket: "nflpredictions-339cb.firebasestorage.app",
  messagingSenderId: "1029734879051",
  appId: "1:1029734879051:web:a3ec1cb70edee22852a2ce",
  measurementId: "G-S1W6397FN0"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export function set(a, b) {
  localStorage.setItem(a, JSON.stringify(b));
}

export function get(a) {
  return JSON.parse(localStorage.getItem(a));
}

export async function getUserData(userID, ids) {
  try {
    const docRef = doc(db, 'users', userID);
    const data = getDoc(docRef);
    return data;
  } catch (error) {
    console.error('Error retrieving user data');
    ids.authRed.textContent = 'Error retrieving user data';
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
}

export async function createLeague(userID, leagueData, ids) {
  try {
    const docRef = doc(db, 'leagues', userID);
    await setDoc(docRef, leagueData);
    console.log('Document written with ID: ', docRef.id);
    ids.authGreen.textContent = 'League Created';
    ids.headerGreen.classList.add('show');
    await sleep(3000);
    ids.headerGreen.classList.remove('show');
  } catch (error) {
    console.error('Error adding document: ', error.message);
    ids.authRed.textContent = 'League Creation Failed';
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
}

export async function exit(ids) {
  try {
    await signOut(auth);
    set('user', '');
    console.log('User signed out');
    window.location.href = 'index';
  } catch (error) {
    console.error('Error signing out:', error.message);
    ids.authRed.textContent = 'Error signing out';
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
}

export async function createUser(userID, userData) {
  try {
    const docRef = doc(db, 'users', userID);
    await setDoc(docRef, userData);
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error.message);
  }
}

export async function signUp(ids) {
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
    
    ids.authGreen.textContent = 'Sign Up Successful;
    ids.headerGreen.classList.add('show');
    await sleep(3000);
    ids.headerGreen.classList.remove('show');
  } catch (error) {
    console.error('Error signing up:', error.message);
    ids.authRed.textContent = 'Error Signing Up';
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
}

async function signIn(ids) {
  const email = ids.email.value;
  const password = ids.password.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    set('user', userCredential);
    console.log('User signed in:', userCredential.user);
    window.location.href = 'leagues';
  } catch (error) {
    console.error('Error signing in:', error.message);
    ids.authRed.textContent = 'Error Signing In';
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
}
