const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
    // var id = 
  }
})

app.listen(3000,() => {
  console.log('Api rodando!');
})