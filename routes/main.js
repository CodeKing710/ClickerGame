//PATH: origin/
const main = require("express").Router();

//Routes
main.get('/', (req,res) => {
  res.render('index');
});

//Catch-all
main.get('*', (req, res) => {
  res.status(404).render('404', {msg: 'Page either doesn\'t exist or you don\'t have the rights to access this page!'});
});

module.exports = main;
