// Code.js - Frontend - GradeHop
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwMLjC3JVfk0Hz5xc4yCPGwrcAvAdW-Qj-wJSileeAt3Mow-0_cpqBg5L2SF5AG8pmDCA/exec';

async function handleSignup(username, email, password) {
  const res = await fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'signup', username, email, password })
  });
  const result = await res.json();
  alert(result.message);
  if (result.success) {
    window.location.href = 'signin.html';
  }
  return result.success;
}

async function handleSignin(email, password) {
  const res = await fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'signin', email, password })
  });
  const result = await res.json();
  alert(result.message);
  if (result.success) {
    localStorage.setItem('user_email', email.toLowerCase());
    localStorage.setItem('username', result.username);
    window.location.href = 'future.html'; // login ke baad kahan jana hai
  }
  return result.success;
}

function protectPage() {
  const page = window.location.pathname.split('/').pop();
  const publicPages = ['index.html', 'signin.html', 'signup.html', ''];
  if (publicPages.includes(page) || page === '') return;
  
  if (!localStorage.getItem('user_email')) {
    window.location.href = 'signin.html';
  }
}
protectPage();

function logout() {
  localStorage.clear();
  window.location.href = 'signin.html';
}