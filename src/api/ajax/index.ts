import axios from 'axios';
import { Toast } from 'antd-mobile';
import { ajaxRequest } from './ajax-request';
import { ajaxResponse } from './ajax-response';
import { Simulate } from 'react-dom/test-utils';

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

interface AjaxProps {
  url: string;
  data: object;
  method: 'GET' | 'POST';
  loading: boolean;
}

export const index = ({
  url,
  data = {},
  method = 'GET',
  loading = true,
}: AjaxProps) => {
  if (loading) {
    Toast.loading('Loading...');
  }
  return new Promise((resolve, reject) => {
    let promise;
    if (method === 'GET') {
      promise = axios.get(url, { params: data });
    } else {
      promise = axios.post(url, data);
    }
    promise.then(
      response => {
        resolve(response.data);
      },
      error => {
        reject(error);
      },
    );
  });
};

ajaxResponse({
  resolveCallback(res) {
    return res;
  },
  rejectCallback(error) {
    return error;
  },
});

ajaxRequest({
  beforeSend(config) {
    return config;
  },
  errorCallback(error) {
    return error;
  },
});
