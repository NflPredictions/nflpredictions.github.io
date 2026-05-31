import {   } from "/main.js"

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
  window.location.href = 'leagues';
});

ids.proposeLoan.addEventListener('click', function() {
});
