import { auth, set, get, sleep } from "/main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

async function exit() {
  try {
    await signOut(auth);
    set('user', '');
    window.location.href = '/index';
  } catch (error) {
    console.error(`Error signing out ${error.message}`);
  }
}

let ids = {
  home: document.getElementById('home'),
  betting: document.getElementById('betting'),
  loans: document.getElementById('loans'),
  league: document.getElementById('league'),
  search: document.getElementById('search'),
  inputClear: document.getElementById('inputClear'),
  exit: document.getElementById('exit'),
};

ids.home.addEventListener('click', function() {
  window.location.href = 'home';
});
ids.loans.addEventListener('click', function() {
  window.location.href = 'loans';
});
ids.league.addEventListener('click', function() {
  window.location.href = 'league';
});

ids.exit.addEventListener('click', async function() {
  exit();
});

ids.inputClear.addEventListener('click', function() {
  search.value = '';
});
