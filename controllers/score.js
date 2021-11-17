const Game = require('../models/game');
const User = require('../models/user');
const Score = require('../models/score')

exports.getScore = (req, res) => {
 Score.find({game: req.game._id})
 .populate({
  path: 'user'
})
 .exec((err, scores) => {
   res.status(200).json(scores);
 })
}

exports.postScore = (req, res) => {
  if (!req.body.score) {
    res.status(400).send("No score included in request body")
  }
  let score = new Score({
    user: req.params.user,
    game: req.params.game,
    score: req.body.score,
  })
  req.game.beers.push(score)
  req.game.save()
  score.save()
  req.app.get('io').emit('newScore', score);
  res.status(200).send(score)
}