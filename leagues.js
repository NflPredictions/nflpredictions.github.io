import { auth, set, get, sleep } from "/main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

async function exit() {
  try {
    await signOut(auth);
    console.log('User signed out');
    set('user', '');
    window.location.href = 'index';
  } catch (error) {
    console.error('Error signing out:', error.message);
    ids.authRed.textContent = `Error signing out: ${error.message}`;
    ids.headerRed.display = 'flex';
    await sleep(3000);
    ids.headerRed.display = 'none';
  }
}

let ids = {
  createLeague: document.getElementById('createLeague'),
  joinLeague: document.getElementById('joinLeague'),
  exit: document.getElementById('exit'),
};

createLeague.addEventListener('click', function() {
});
joinLeague.addEventListener('click', function() {
});

exit.addEventListener('click', async function() {
  exit();
});
