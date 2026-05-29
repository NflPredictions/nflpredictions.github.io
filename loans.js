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
  home: document.getElementById('home'),
  betting: document.getElementById('betting'),
  loans: document.getElementById('loans'),
  league: document.getElementById('league'),
  proposeLoan: document.getElementById('proposeLoan'),
  exit: document.getElementById('exit'),
};

ids.home.addEventListener('click', function() {
  window.location.href = 'home';
});
ids.betting.addEventListener('click', function() {
  window.location.href = 'betting';
});
ids.league.addEventListener('click', function() {
  window.location.href = 'league';
});

ids.addEventListener('click', function() {
  exit();
});

ids.proposeLoan.addEventListener('click', function() {
});
