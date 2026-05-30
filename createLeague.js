import { auth, db, set, get, sleep } from "/main.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const ids = {
  name: document.getElementById('name'),
  password: document.getElementById('password'),
  cash: document.getElementById('cash'),
  createLeague: document.getElementById('createLeague'),
  exit: document.getElementById('exit'),
  headerRed: document.getElementById('headerRed'),
  authRed: document.getElementById('authRed'),
};

async function createLeague(leagueID, leagueData) {
  try {
    const docRef = doc(db, 'leagues', leagueID);
    await setDoc(docRef, leagueData);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error.message);
  }
}

ids.createLeague.addEventListener('click', async function() {

});
