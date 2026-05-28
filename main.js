import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCictD2QgC4sK-GTqpFeLOiDJucCziVjeE",
  authDomain: "nflpredictions-339cb.firebaseapp.com",
  projectId: "nflpredictions-339cb",
  storageBucket: "nflpredictions-339cb.firebasestorage.app",
  messagingSenderId: "1029734879051",
  appId: "1:1029734879051:web:a3ec1cb70edee22852a2ce",
  measurementId: "G-S1W6397FN0"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export function set(a, b) {
  localStorage.setItem(a, JSON.stringify(b));
}

export function get(a) {
  return JSON.parse(localStorage.getItem(a));
}
