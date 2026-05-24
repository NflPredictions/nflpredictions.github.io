if (get('signedIn') !== true) {
  window.location.href = 'index';
}

let ids = {
  createLeague: document.getElementById('createLeague'),
  joinLeague: document.getElementbyId('joinLeague'),
  exit: document.getElementById('exit'),
};

createLeague.addEventListener('click', function() {
});
joinLeague.addEventListener('click', function() {
});

exit.addEventListener('click', function() {
  window.location.href = 'index';
});
