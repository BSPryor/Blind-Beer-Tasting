const passport = require("passport");
const Authentication = require("./controllers/authentication");
const Game = require("./controllers/game")
const Beer = require("./controllers/beer")
const Score = require("./controllers/score")
const express = require("express");
const app = express();
const passportService = require('./services/passport')

const Games = require('./models/game')
const Users = require('./models/user')

const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.param('game', (req, res, next, id) => {
    Games.findById(id)
    .populate({
      path: 'beers'
    })
    .exec((err, game) => {
      if(!game) {
        res.writeHead(404, 'Game not found'); 
        return res.end();
      }
      else if (err)
        throw err;
      else
        req.game = game; 
      next();
    })
  })

  app.param('user', (req, res, next, id)=> {
    Users.findById(id).exec((err, user) => {
      if(!user){
        res.writeHead(404, 'User not found'); 
        return res.end();
      }  else if (err) {
        throw err;
      } else
      req.user = user; 
    next();
    })
  })


  app.post('/auth/signin', requireSignin, Authentication.signin);
  app.post('/auth/signup', Authentication.signup);
  app.post('/auth/signout', Authentication.signout);

  app.get('/game', Game.getGameByName)
  app.get('/games', Game.getGames);
  app.get('/games/:game', Game.getGame);
  app.post('/games', Game.postGame)

  app.get('/games/:game/beers', Beer.getBeers);
  app.post('/games/:game/beers', Beer.postBeer);

  app.post('/games/:game/:user/score', Score.postScore);
  app.get('/games/:game/score', Score.getScore)
};
