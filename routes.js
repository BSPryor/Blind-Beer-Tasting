const passports = require("passport");
const Authentication = require("./controllers/authentication");

const requireSignin = passports.authenticate("local", { session: false });

module.exports = function (app) {
  app.post("/auth/signin", requireSignin, Authentication.signin);
  app.post("/auth/signup", Authentication.signup);
  app.post("/auth/signout", Authentication.signout);
};
