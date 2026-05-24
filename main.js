function set(a, b) {
  localStorage.setItem(a, JSON.stringify(b));
}

function get(a) {
  return JSON.parse(localStorage.getItem(a));
}
