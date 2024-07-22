export default function localStorageGetTextOrSetEmptyString() {
  return localStorage.getItem('text') ? localStorage.getItem('text') : '';
}
