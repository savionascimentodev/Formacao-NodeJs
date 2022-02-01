const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const jwtSecret = 'ijdaijdiasjdiasjdiasiqwjenq'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


function auth(req,res,next) {

  const authToken = req.headers['authorization']


  if (authToken != undefined) {

    const bearer = authToken.split(' ')
    var token = bearer[1]
    jwt.verify(token,jwtSecret,(err,data) => {
      if (err) {
        res.status(401)
        res.json({ err: 'Token inválido' })
      } else {
        req.token = token;
        req.loggedUser = { id: data.id,email: data.email }
        next();
      }
    })
  } else {
    res.status(401)
    res.json({ err: 'Token inválido' })
  }
}

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
  users: [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      password: 'cobrakai'
    },
    {
      id: 2,
      name: 'Daniel',
      email: 'daniel@gmail.com',
      password: 'myagi'
    }
  ]
}

// Games

app.get('/games',auth,(req,res) => {
  res.statusCode = 200; // Sempre passar um StatusCode para o usuário;
  res.json({ user: req.loggedUser,games: DB.games })
})

app.get('/game/:id',auth,(req,res) => {
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

app.post('/game',auth,(req,res) => {
  var { title,year,price } = req.body;

  DB.games.push({
    id: 22,
    title,
    price,
    year
  });

  res.sendStatus(200)
})

app.delete('/game/:id',auth,(req,res) => {
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

app.put('/game/:id',auth,(req,res) => {
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

// Users

app.post('/auth',auth,(req,res) => {

  var { email,password } = req.body;
  if (email == undefined) {
    res.status(404)
    res.json({ err: "Email inválido" })
  } else {
    var user = DB.users.find(u => u.email == email)

    if (user != undefined) {
      if (user.password == password) {

        jwt.sign({ id: user.id,email: user.email },jwtSecret,{ expiresIn: '24h' },(err,token) => {
          if (err) {
            res.status(400)
            res.json({ err: 'Falha Interna' })
          } else {
            res.status(200)
            res.json({ token: token })
          }
        }) // Token JWT;
      } else {
        res.status(401)
        res.json({ err: "Credenciais inválidas" })

      }
    } else {
      res.status(404)
      res.json({ err: "Email enviado não existe" })
    }
  }

})

app.listen(3000,() => {
  console.log('Api rodando!');
})