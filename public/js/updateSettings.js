/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

// Type = 'password'/'data' data=object
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    // console.log(type);
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
      // window.setTimeout(() => {
      //   location.assign('/me');
      // }, 500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
