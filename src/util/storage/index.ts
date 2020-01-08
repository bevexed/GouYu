export const saveLocalStorage = (name: string, value: object | string) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(name, value);
};

export const getLocalStorage = (name: string) => {
  return localStorage.getItem(name) || ''
};
