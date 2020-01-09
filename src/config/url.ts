const isDev = process.env.NODE_ENV === 'development';

export const BackEndBaseUrl = isDev ? 'http://115.29.204.199:8086/api' : 'http://115.29.204.199:8086/api';
 