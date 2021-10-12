const requireSignin = passport.authenticate("local", { session: false });
const Authentication = require("./controllers/authentication");

module.exports = function (app) {
  app.post("/auth/signin", requireSignin);
  app.post("/auth/signup", Authentication.signup);
  app.post("/auth/signout", Authentication.signout);
};
