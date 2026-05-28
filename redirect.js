import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { auth, get } from "/main.js"

const user = get('user');

function checkAuthenticationAndRedirect() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "index";
    }
  });
}

document.addEventListener("DOMContentLoaded", checkAuthenticationAndRedirect);
