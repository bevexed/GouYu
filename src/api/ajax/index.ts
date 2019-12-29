import axios from 'axios';
import { ajaxRequest } from './ajax-request';
import { ajaxResponse } from './ajax-response';
import { BackEndBaseUrl } from '../../config/url';
import Qs from 'qs';

axios.defaults.baseURL = BackEndBaseUrl;
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';

interface AjaxProps {
  url: string;
  method: 'GET' | 'POST';
  data: object;
  loading?: boolean;
}

export const ajax = ({
  url,
  data,
  method = 'GET',
}: AjaxProps) => {
  // 发送简单请求
  const _data = Qs.stringify(data);
  return new Promise((resolve, reject) => {
    let promise;
    if (method === 'GET') {
      promise = axios.get(url, { params: _data });
    } else {
      promise = axios.post(url, _data);
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
