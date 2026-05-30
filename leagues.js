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
    ids.headerRed.classList.add('show');
    await sleep(3000);
    ids.headerRed.classList.remove('show');
  }
}

let ids = {
  createLeague: document.getElementById('createLeague'),
  joinLeague: document.getElementById('joinLeague'),
  exit: document.getElementById('exit'),
  headerRed: document.getElementById('headerRed'),
  authRed: document.getElementById('authRed'),
};

ids.createLeague.addEventListener('click', function() {
  window.location.href = 'createLeague';
});
ids.joinLeague.addEventListener('click', function() {
});

ids.exit.addEventListener('click', async function() {
  exit();
});
