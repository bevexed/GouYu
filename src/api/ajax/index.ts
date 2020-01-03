import axios from 'axios';
import { ajaxRequest } from './ajax-request';
import { ajaxResponse } from './ajax-response';
import { BackEndBaseUrl } from '../../config/url';
import Qs from 'qs';
import { Toast } from 'antd-mobile';
import Store from '../../redux/store'
import { clearUserInfo } from "../../redux/user/actions";
import { getLocalStorage } from "../../util/storage";

axios.defaults.baseURL = BackEndBaseUrl;
// axios.defaults.headers.post['Content-Type'] =
// 'application/x-www-form-urlencoded';

interface AjaxProps {
  url: string;
  method: 'GET' | 'POST';
  data?: object;
  loading?: boolean;
}

export const ajax = <T>({
  url,
  data,
  method = 'GET',
}: AjaxProps): Promise<ResProps<T>> => {
  // 发送简单请求
  console.log('%c Params', 'color:green', data);
  axios.defaults.headers.common['token'] = getLocalStorage('token');

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
        console.log('%c error', 'color:red', error);
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
    Intercept(res.data);
    return res;
  },
  rejectCallback(error) {
    if (error?.response?.status !== 200) {
      Toast.fail(error?.response?.data?.message);
      Store.dispatch(clearUserInfo())
    }
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
  } else if (data.status === AjaxStatus.fail) {
    Toast.fail(data.message);
  }
};
