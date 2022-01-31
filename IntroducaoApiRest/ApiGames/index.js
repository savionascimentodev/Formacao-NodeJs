const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var DB = {
  games: [
    {
      id: 92,
      title: 'Call of Duty',
      year: 2019,
      price: 150,
    },
    {
      id: 32,
      title: 'God of War',
      year: 2022,
      price: 200,
    },
    {
      id: 42,
      title: 'League of Legends',
      year: 2016,
      price: 0,
    },

  ],
}

app.get('/games',(req,res) => {
  res.statusCode = 200; // Sempre passar um StatusCode para o usuário;
  res.json(DB.games)
})

app.get('/game/:id',(req,res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id)

    var game = DB.games.find(g => g.id == id)

    if (game != undefined) {
      res.statusCode = 200;
      res.json(game)
    } else {
      res.sendStatus(404);
    }
  }
})


app.post('/game',(req,res) => {
  var { title,year,price } = req.body;

  DB.games.push({
    id: 22,
    title,
    price,
    year
  });

  res.sendStatus(200)
})

app.delete('/game/:id',(req,res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id)
    var index = DB.games.findIndex(g => g.id === id)

    if (index === -1) {
      res.sendStatus(400);
    } else {
      DB.games.splice(index,1);
      res.sendStatus(200);
    }
  }
})

app.put('/game/:id',(req,res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id)

    var game = DB.games.find(g => g.id == id)

    if (game != undefined) {

      var { title,year,price } = req.body;

      if (title != undefined) {
        game.title = title;
      }

      if (price != undefined) {
        game.price = price;
      }

      if (year != undefined) {
        game.year = year;
      }
      res.sendStatus(200)
    } else {
      res.sendStatus(404);
    }
  }
})

app.listen(3000,() => {
  console.log('Api rodando!');
})