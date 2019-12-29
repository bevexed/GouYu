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

export const ajax = <T>({
  url,
  data,
  method = 'GET',
}: AjaxProps): Promise<ResProps<T>> => {
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

export enum AjaxStatus {
  'success',
  'fail',
}


export interface ResProps<T> {
  message: string;
  status: AjaxStatus;
  success: boolean;
  data: T;
  [key: string]: any;
}

const Intercept = <T>(data: ResProps<T>) => {
  if (data.status === AjaxStatus.success && data.success) {
  } else {
    Toast.fail(data.message);
  }
};
