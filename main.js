import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCictD2QgC4sK-GTqpFeLOiDJucCziVjeE",
  authDomain: "nflpredictions-339cb.firebaseapp.com",
  projectId: "nflpredictions-339cb",
  storageBucket: "nflpredictions-339cb.firebasestorage.app",
  messagingSenderId: "1029734879051",
  appId: "1:1029734879051:web:a3ec1cb70edee22852a2ce",
  measurementId: "G-S1W6397FN0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function set(a, b) {
  localStorage.setItem(a, JSON.stringify(b));
}

function get(a) {
  return JSON.parse(localStorage.getItem(a));
}
