import {  } from "/main.js";

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
ids.loans.addEventListener('click', function() {
  window.location.href = 'loans';
});

ids.exit.addEventListener('click', async function() {
  window.location.hre = 'leagues';
});

ids.proposeLoan.addEventListener('click', function() {
});
