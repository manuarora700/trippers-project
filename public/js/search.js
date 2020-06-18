/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const search = async searchTerm => {
  if (!searchTerm.trim()) return;
  window.location.href = `/search/${searchTerm}`;
};
