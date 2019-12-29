import axios from 'axios';
import { ajaxRequest } from './ajax-request';
import { ajaxResponse } from './ajax-response';
import { BackEndBaseUrl } from '../../config/url';
import Qs from 'qs';
import { Toast } from 'antd-mobile';

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

export const ajax = <T>({ url, data, method = 'GET' }: AjaxProps):Promise<T> => {
  // 发送简单请求
  console.log('%c Params', 'color:green', data);
  return new Promise((resolve, reject) => {
    let promise;
    if (method === 'GET') {
      promise = axios.get(url, { params: data });
    } else {
      promise = axios.post(url, Qs.stringify(data));
    }
    promise.then(
      response => {
        console.log('%c res', 'color:red', response.data);
        resolve(response.data);
      },
      error => {
        reject(error);
      },
    );
  });
};

ajaxRequest({
  beforeSend(config) {
    return config;
  },
  errorCallback(error) {
    return error;
  },
});

ajaxResponse({
  resolveCallback(res) {
    const { data } = res;
    Intercept(data);
    return res;
  },
  rejectCallback(error) {
    Toast.fail('服务器错误', error);
    return error;
  },
});

enum Status {
  'success',
  'fail',
}

interface ResProps {
  message: string;
  status: Status;
  success: boolean;
  [key: string]: any;
}

const Intercept = (data: ResProps) => {
  if (data.status === Status.success && data.success) {
  } else {
    Toast.fail(data.message);
  }
};
