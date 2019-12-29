// 添加请求拦截器
import axios from 'axios';

interface ajaxRequestProps {
  beforeSend: (arg: any) => any;
  errorCallback: (arg: any) => any;
}

export const ajaxRequest = ({
  beforeSend,
  errorCallback,
}: ajaxRequestProps) => {
  axios.interceptors.request.use(
    config => beforeSend(config),
    error => {
      errorCallback(error);
      return Promise.reject(error);
    },
  );
};
