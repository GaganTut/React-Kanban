const express = require('express');
const api = express.Router();
const { Card, User } = require('../models');

api.route('/')
  .get((req, res) => {
    Card.findAll({
      include: [
        {
          model: User,
          as: 'Creator',
          attributes: ['username', 'id', 'firstname', 'lastname']
        },
        {
          model: User,
          as: 'Assigned',
          attributes: ['username', 'id', 'firstname', 'lastname']
        }
      ]
    })
      .then( cards => {
        res.json(cards);
      })
      .catch(err => {
        res.send(err);
      });
  })
  .post((req, res) => {
    Card.create(req.body)
      .then(card => {
        res.json(card);
      })
      .catch(err => {
        res.send(err);
      });
  });

api.delete('/:id', (req, res) => {
  Card.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(res.redirect('/'))
  .catch(err => {
    res.send(err);
  });
});


api.put('/:id', (req, res) => {
  Card.update(req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(res.redirect('/api'))
  .catch(err => {
    res.send(err);
  });
});

module.exports = api;