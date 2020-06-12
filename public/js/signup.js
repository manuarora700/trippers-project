/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (
  name,
  email,
  password,
  passwordConfirm,
  photo = 'default.jpg'
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
        photo
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Signed up successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
