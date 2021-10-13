const Game = require('../models/game');
const User = require('../models/user')

exports.getGames = (req, res) => {
  Game.find({})
    .populate("beers")
    .exec((err, games) => {
      if(err) return next(err);
      res.status(200).json(games);
    })
}

exports.getGame = (req, res) => {
  res.status(200).json(req.game);
}

exports.postGame = (req, res) => {
  if (!req.body.name) {
    res.status(400).send("No name included in request body")
    return res.end();
  }
  
  User.findOne()
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