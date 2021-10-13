const passport = require("passport");
const Authentication = require("./controllers/authentication");
const express = require("express");
const app = express();
const passportService = require('./services/passport')


const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.post('/auth/signin', requireSignin, Authentication.signin);
  app.post('/auth/signup', Authentication.signup);
  app.post('/auth/signout', Authentication.signout);
};
