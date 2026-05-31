import { auth, db, set, get, sleep } from "/main.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const ids = {
  name: document.getElementById('name'),
  password: document.getElementById('password'),
  cash: document.getElementById('cash'),
  createLeague: document.getElementById('createLeague'),
  exit: document.getElementById('exit'),
  headerRed: document.getElementById('headerRed'),
  authRed: document.getElementById('authRed'),
  headerGreen: document.getElementById('headerGreen'),
  authGreen: document.getElementById('authGreen'),
};

async function createLeague(userID, leagueData) {
  try {
    const docRef = doc(db, 'leagues', userID);
    await setDoc(docRef, leagueData);
    console.log("Document written with ID: ", docRef.id);
    ids.authGreen.textContent = 'League Created';
    ids.headerGreen.classList.add('show');
    await sleep(3000);
    ids.headerGreen.classList.remove('show');
  } catch (error) {
    console.error("Error adding document: ", error.message);
    ids.authRed.textContent = 'League Creation Failed';
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
}

async function getUserData(userID, ids) {
  try {
    const docRef = doc(db, 'users', userID);
    const data = getDoc(docRef);
    return data;
  } catch (error) {
    console.error("Error retrieving user data: ", error.message);
    ids.authRed.textContent = 'User Data Fetch Failed';
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
}

ids.createLeague.addEventListener('click', async function() {
  const leagueData = {
    name: ids.name.value,
    password: ids.password.value,
    cash: ids.cash.value,
    users: {
      uid: get('user').user.uid, 
      name: get('user').user.name, 
    },
  }
  createLeague(get('user').user.uid, leagueData);
});

ids.exit.addEventListener('click', function() {
  window.location.href = 'league';
});
