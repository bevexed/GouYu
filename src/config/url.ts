const isDev = process.env.NODE_ENV === 'development';

export const BackEndBaseUrl = isDev ? 'http://192.168.1.150:8086/api' : '';
