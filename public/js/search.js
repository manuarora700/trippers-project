/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const search = async searchTerm => {
  // console.log('LOGIN!');
  try {
    if (searchTerm.trim() === '') return;
    const res = await axios({
      method: 'GET',
      url: `/search/${searchTerm}`,
      data: {
        searchTerm
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Search was performed');
      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
    console.log('search function working', searchTerm);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
