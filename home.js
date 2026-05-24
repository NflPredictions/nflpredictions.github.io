if (get('signedIn') !== true) {
  window.location.href = 'index';
}

let ids = {
  home: document.getElementById('home'),
  betting: document.getElementById('betting'),
  loans: document.getElementById('loans'),
  league: document.getElementById('league'),
  proposeLoan: document.getElementById('proposeLoan'),
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

ids.proposeLoan.addEventListener('click', function() {
});
