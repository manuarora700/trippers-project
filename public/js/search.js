/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const search = async searchTerm => {
  if (!searchTerm.trim()) {
    return location.assign('/');
  }
  showAlert('success', 'Searching...', 2);
  window.setTimeout(() => {
    location.assign(`/search/${searchTerm}`);
  }, 200);
  // window.location.href = `/search/${searchTerm}`;
};
