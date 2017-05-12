const express = require('express');
const user = express.Router();
const { Card, User } = require('../../models');
const saltRounds = 10;
const bcrypt = require('bcrypt');
const passport = require('passport');

user.route('/')
  .get((req, res) => {
    User.findAll({
      attributes: ['username', 'firstname', 'lastname']
    })
      .then( user => {
        res.json(user);
      })
      .catch(err => {
        res.send(err);
      });
  });

user.post('/new', (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: hash
      })
      .then((user) => {
        res.json(
          {
            "firstname": user.firstname,
            "lastname": user.lastname,
            "username": user.username,
          }
        );
      });
    });
  });
});


user.delete('/:username', (req, res) => {
  Card.destroy(
    {
      where: {
        username: req.params.username
      }
    }
  )
  .then(res.json({success: true}))
  .catch(err => {
    res.send(err);
  });
});


user.put('/:username', (req, res) => {
  Card.update(req.body,
    {
      where: {
        username: req.params.username
      }
    }
  )
  .then(res.json({success: true}))
  .catch(err => {
    res.send(err);
  });
});

user.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect(`/api/user/login/success/${req.body.username}`);
});

user.get('/login/success/:username', (req, res) => {
  User.findOne({
    where: {
      username: req.params.username
    },
    attributes: ['username', 'firstname', 'lastname']
  })
    .then(userInfo => {
      res.json(userInfo);
    })
    .catch(console.log);
});

module.exports = user;