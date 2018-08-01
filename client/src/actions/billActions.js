import axios from 'axios';
import { GET_BILLS } from './types';

import { getAuthToken } from '../utils/getAuthToken';
axios.defaults.headers.common['Authorization'] = getAuthToken();

export const addBill = billData => dispatch => {
  axios
    .post('/api/bills', billData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const getBills = () => dispatch => {
  axios
    .get('/api/bills')
    .then(res => {
      dispatch({
        type: GET_BILLS,
        payload: res.data.bills
      });
      // console.log(res.data.bills);
    })
    .catch(err => console.log(err));
};