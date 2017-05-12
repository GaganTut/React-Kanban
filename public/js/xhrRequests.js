window.getAllCards = () => fetch('/api/cards').then(res => res.json());

window.addCardToDb = (cardObj) => {
  return fetch('/api/cards', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(cardObj)
  }).then(res => res.json());
};

window.updateCardInDb = (id, cardObj) => {
  return fetch(`/api/cards/${id}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(cardObj)
  }).then(res => res.json());
};

window.deleteCardInDb = (id) => {
  return fetch(`/api/cards/${id}`, {
    method: 'DELETE'
  });
};

window.sendLoginRequest = (username, password) => {
  return fetch('/api/user/login', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({username: username, password:password})
  })
    .then(res => res.json());
};