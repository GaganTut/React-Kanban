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

window.updateCardInDb = (id, cardObj) => {
  return fetch(`/api/${id}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(cardObj)
  }).then(res => res.json());
};