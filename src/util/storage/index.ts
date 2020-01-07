export const saveLocalStorage = (name: string, value: any) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalStorage = (name: string) => {
  return localStorage.getItem(name) || ''
};
