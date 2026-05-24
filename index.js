set('signedIn', false);
set('username', '');

let ids = {
  username: document.getElementById('username'),
  password: document.getElementById('password'),
  signUp: document.getElementById('signUp'),
  signIn: document.getElementById('signIn'),
};

ids.signIn.addEventListener('click', function() {
  set('signedIn', true);
  set('username', ids.username.value);
  window.location.href = 'home';
});
