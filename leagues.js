import { auth, set, get, sleep } from "/main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

async function exit() {
  try {
    await signOut(auth);
    set('user', '');
    console.log('User signed out');
    window.location.href = 'index';
  } catch (error) {
    console.error('Error signing out:', error.message);
    ids.authRed.textContent = `Error signing out: ${error.message}`;
    ids.headerRed.style.display = 'flex';
    await sleep(3000);
    ids.headerRed.style.display = 'none';
  }
}

let ids = {
  createLeague: document.getElementById('createLeague'),
  joinLeague: document.getElementById('joinLeague'),
  exit: document.getElementById('exit'),
};

ids.createLeague.addEventListener('click', function() {
});
ids.joinLeague.addEventListener('click', function() {
});

ids.exit.addEventListener('click', async function() {
  exit();
});
