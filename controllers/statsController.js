// const bcrypt = require('bcrypt');
const { Game } = require('../db/models');

exports.postStats = async (req, res) => {
  const { playername, playerscore } = req.body;
  await Game.create({
    player: playername,
    score: playerscore,
  });
  res.redirect('/allstats');
};

exports.renderAllStats = async (req, res) => {
  const gameList = await Game.findAll({
    raw: true,
    order: [['score', 'ASC']],
  });
  console.log(gameList);
  res.render('allStats', { gameList });
};
