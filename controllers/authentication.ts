import user from "../models/user";

const jwt = require("jwt-simple");

const tokenForUser = (user) => {
  return jwt.encode(
    {
      sub: user._id,
      iat: Math.round(Date.now() / 1000),
    },
    "verysecret"
  );
};

exports.signin = (req, res) => {
  res.send({
    token: tokenForUser(req.user),
  });
};

exports.signup = function (req, res, next) {
  const name = req.body.name;
  const password = req.body.password;

  if (!name || !password) {
    return res
      .status(422)
      .send({ error: "You must provide a name and password" });
  }
  User.findOne({ name: name }, function (err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: "Name already exists" });
    }
    const user = new User();
    user.name = name;
    user.setPassword(password);

    user.save(function (err, user) {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.currentUser = function (req, res) {
  const user = {
    name: req.user.name,
    token: tokenForUser(req.user),
  };

  res.send(user);
};

exports.singout = (req, res) => {
  req.logout();
  res.redirect("/");
};