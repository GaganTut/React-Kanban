window.getAllCards = () => {
  return fetch('/api').then(res => res.json());
};