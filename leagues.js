import { exit } from "/main.js";

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
  exit(ids);
});
