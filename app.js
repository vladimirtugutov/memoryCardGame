const express = require('express');
const path = require('path');
const session = require('express-session');
const pgSessionStore = require('connect-pg-simple')(session);
require('dotenv').config();
const methodOverride = require('method-override');

const port = process.env.PORT;
const app = express();

// const authRouter = require('./routes/authRoute');
const gameRouter = require('./routes/gameRoute');
const statsRoute = require('./routes/statsRoute');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // чтобы парсить post-запросы
app.use(express.json()); // чтобы парсить
app.use(methodOverride('_method')); // чтобы парсить

app.get('/roundstats/:playesGuessesCount', (req, res) => {
  const { playesGuessesCount } = req.params;
  res.render('roundStats', { playesGuessesCount });
});

app.get('/', (req, res) => {
//   res.redirect('/decks');
// });
// app.get('/decks', (req, res) => {
  res.render('decks');
});

app.use('/game', gameRouter);
app.use('/allstats', statsRoute);

app.listen(port, () => {
  console.log(`server started PORT: ${port}`);
});
