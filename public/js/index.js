/*eslint-disable*/
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { signup } from './signup';
import { updateSettings } from './updateSettings';

// DOM elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form-login');
const logOutBtn = document.querySelector('.nav__el--logout');
const signupForm = document.querySelector('.form-signup');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');

// Values

// Delegation
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  console.log('Login form is here');
  loginForm.addEventListener('submit', e => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    e.preventDefault();

    login(email, password);
  });
}

if (signupForm) {
  console.log('Signup form is here');
  signupForm.addEventListener('submit', e => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    e.preventDefault();

    signup(name, email, password, passwordConfirm);
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm) {
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    updateSettings({ name, email }, 'data');
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );
    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password').value = '';
    document.getElementById('password-current').value = '';
    document.getElementById('password-confirm').value = '';
  });
}
