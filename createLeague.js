import { get, createLeague, getUserData } from "/main.js";

const user = get('user').user;

const ids = {
  name: document.getElementById('name'),
  password: document.getElementById('password'),
  cash: document.getElementById('cash'),
  createLeague: document.getElementById('createLeague'),
  exit: document.getElementById('exit'),
  headerRed: document.getElementById('headerRed'),
  authRed: document.getElementById('authRed'),
  headerGreen: document.getElementById('headerGreen'),
  authGreen: document.getElementById('authGreen'),
};

ids.createLeague.addEventListener('click', async function() {
  const leagueData = {
    name: ids.name.value,
    password: ids.password.value,
    cash: ids.cash.value,
    users: {
      uid: user.uid, 
      name: getUserData(user.uid, ids).name,
      cash: ids.cash.value,
    },
  }
  createLeague(user.uid, leagueData, ids);
});

ids.exit.addEventListener('click', function() {
  window.location.href = 'leagues';
});
