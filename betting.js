if (get('signedIn') !== true) {
  window.location.href = 'index';
}

let ids = {
  home: document.getElementById('home'),
  betting: document.getElementById('betting'),
  loans: document.getElementById('loans'),
  league: document.getElementById('league'),
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
