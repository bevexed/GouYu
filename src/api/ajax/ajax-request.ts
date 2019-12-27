// 添加请求拦截器
import axios from 'axios';

interface ajaxRequestProps {
  beforeSend<T>(config: T): T;
  errorCallback<T>(error: T): T;
}

export const ajaxRequest = ({
  beforeSend,
  errorCallback,
}: ajaxRequestProps) => {
  axios.interceptors.request.use(
    config =>
      beforeSend(config),
    error => {
      errorCallback(error);
      return Promise.reject(error);
    },
  );
};
