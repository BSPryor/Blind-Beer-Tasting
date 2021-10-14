const Beer = require('../models/beer');
const Game = require('../models/game');

exports.getBeers = (req, res) => {
  Beer.find({game: req.game._id})
  .exec((err, beers) => {
    res.status(200).json(beers);
  })
};

exports.postBeer = (req, res) => {
  if(!req.body.name || !req.body.style || !req.body.brewery){
    res.status(400).send("Missing beer information")
    return res.end();
  }
  let beer = new Beer({
    name: req.body.name,
    style: req.body.style,
    brewery: req.body.brewery,
    game: req.game._id
  })

  req.game.beers.push(beer)
  req.board.save()
  beer.save()
  req.app.get('io').emit('newBeer', beer);
  res.status(200).send(beer)
}

