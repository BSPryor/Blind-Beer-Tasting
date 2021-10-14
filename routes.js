const passport = require("passport");
const Authentication = require("./controllers/authentication");
const Game = require("./controllers/game")
const Beer = require("./controllers/beer")
const Score = require("./controllers/score")
const express = require("express");
const app = express();
const passportService = require('./services/passport')


const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.post('/auth/signin', requireSignin, Authentication.signin);
  app.post('/auth/signup', Authentication.signup);
  app.post('/auth/signout', Authentication.signout);

  app.get('/games', Game.getGames);
  app.get('/games/:game', Game.getGame);
  app.post('/games', Game.postGame)

  app.get('/games/:game/beers', Beer.getBeers);
  app.post('/games/:game/beers', Beer.postBeer);
};
