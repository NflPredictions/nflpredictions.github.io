import { auth, db, set, get, sleep } from "/main.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const ids = {
  name: document.getElementById('name'),
  password: document.getElementById('password'),
  cash: document.getElementById('cash'),
  createLeague: document.getElementById('createLeague'),
  exit: document.getElementById('exit'),
};

async function createLeague() {
  try {
    const docRef = doc(
}
