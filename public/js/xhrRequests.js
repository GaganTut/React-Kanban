window.getAllCards = () => fetch('/api').then(res => res.json());

window.addCardToDb = (cardObj) => {
  return fetch('/api', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(cardObj)
  }).then(res => res.json());
};