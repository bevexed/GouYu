// 添加响应拦截器
import axios from 'axios';

interface ajaxResponseProps {
  resolveCallback<T>(res: T): T;
  rejectCallback<T>(error: T): T;
}

export const ajaxResponse = ({
  resolveCallback,
  rejectCallback,
}: ajaxResponseProps) => {
  axios.interceptors.response.use(
    response => resolveCallback(response),
    error => {
      rejectCallback(error);
      return Promise.reject(error);
    },
  );
};
