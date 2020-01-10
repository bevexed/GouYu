const isDev = process.env.NODE_ENV === 'development';

export const BackEndBaseUrl = isDev ? 'http://115.29.204.199:8086/api' : 'http://115.29.204.199:8086/api';
// export const BackEndBaseUrl = isDev ? 'http://192.168.1.150:8086/api' : '';
