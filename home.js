import { auth, set, get } from "/main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

if (get('signedIn') !== true) {
  window.location.href = 'index';
}

let ids = {
  home: document.getElementById('home'),
  betting: document.getElementById('betting'),
  loans: document.getElementById('loans'),
  league: document.getElementById('league'),
  proposeLoan: document.getElementById('proposeLoan'),
  exit: document.getElementById('exit'),
};

ids.betting.addEventListener('click', function() {
  window.location.href = 'betting';
});
ids.loans.addEventListener('click', function() {
  window.location.href = 'loans';
});
ids.league.addEventListener('click', function() {
  window.location.href = 'league';
});

ids.exit.addEventListener('click', async function() {
  try {
    await signOut(auth);
    console.log('User signed out');
    authStatus.textContent = 'Signed out';
    window.location.href = 'index';
  } catch (error) {
    console.error('Error signing out', error.message);
    authStatus.textContent = `Error signing out ${error.message}`;
  }
});

ids.proposeLoan.addEventListener('click', function() {
});
