const Game = require('../models/game');
const User = require('../models/user')

exports.getGames = (req, res) => {
  console.log(req.user)
  Game.find({user: req.user._id})
  .exec((err, games) => {
    res.status(200).json(games)
  })
}

exports.getGame = (req, res) => {
  console.log(req.user)
  Game.find({user: req.user._id})
  .exec((err, games) => {
    res.status(200).json(games)
  })
}

exports.postGame = (req, res) => {
  if (!req.body.name) {
    res.status(400).send("No name included in request body")
    return res.end();
  }
  
  User.findById(req.params.user)
  .exec((err, user) => {
    const game = new Game({
      name: req.body.name,
      beers: [],
      scores: [],
      user: user._id
    });

    req.app.get('io').emit('newGame', game);

    game.save()
    user.games.push(game);
    user.save();
    res.status(200).send(game);
  })
};

exports.getGameByName = (req, res) => {
  if (!req.query.name) {
    res.status(400).send("No name included in request body")
    return res.end();
  }
  Game.findOne({name: req.query.name})
  .populate("beers")
    .exec((err, game) => {
      if(err) return next(err);
      res.status(200).json(game);
    })
};