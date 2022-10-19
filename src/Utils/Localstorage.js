const LOCALSTORAGE_KEY = 'user-phonebook';

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
};

export const setLocalStorage = obj => {
  return localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(obj));
};
