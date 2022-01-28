/*--------------------- JSON Encurtado ------------------------- */

var nome = 'Sávio'
var sexo = 'M'
var idade = 20

// Jeito antigo;
var user = {
  nome: nome,
  sexo: sexo,
  idade: idade
}

// Em vez de fazermos desse jeito, podemos criar o JSON de forma reduzida, em vez de colocar os campos já colocamos os valores,o JavaScript lê o nome da váriavel e automaticamente já cria o campo, isso só funciona com (váriaveis, lets e constantes);

// Jeito novo;
var user = {
  nome,
  sexo,
  idade
}

/*---------------------- Operador Spread ---------------------------- */
// Ele serve para pegar campos de um objeto, copiar e colar dentro de outros objetos;

// Jeito Antigo, muito manual, gerando muita repetição;
var animes = {
  nome: 'shingekiNoKyojin',
  genero: 'shounnen',
  anoLancamento: 2009,
  autor: 'Isayama',
  idade: user.idade,
  sexo: user.sexo
}

// Jeito novo, com (...) ele copia todos os campos de um objeto, colando no outro;
var animes = {
  nome: 'shingekiNoKyojin',
  genero: 'shounnen',
  anoLancamento: 2009,
  ...user
}

// Nesse exmplo copie todos os campos do Objeto user, para o Objeto animes com o operador spread.

/*--------------------- Destructuring (desestruturação) ----------------------- */
// Permite recuperar campos dentro de um JSON e criar váriaveis a partir desses campos, funciona como um extrator que vai dentro do objeto extrai os campos e transforma em uma variável

var carro = {
  nome: 'Civic',
  modelo: 'Compact',
  ano: 2022,
}

// Jeito antigo, se eu quiser pegar algum campo desse objeto no seria assim:
var nome = carro.nome
var modelo = carro.modelo
var ano = carro.ano

// Jeito novo, muito mais produtivo, salvar dados de um objeto dentro de uma variável;
var { nome, modelo, ano } = carro
// O { } antes de uma variável é o Operador de Desestruturação, significa que dentro do Objeto carro ele pega um campo ou todos e transforma em uma váriavel;

/*--------------------- Template Literals ----------------------- */
// As templates literals veio para deixar de forma mais organizado a mistura de strings com variáveis, sem várias concatenações;

var nome = 'Savio'
var sobrenome = 'Nascimento'

// Jeito antigo, concatenação
var frase = 'Olá meu nome é ' + nome + ' e meu sobrenome é ' + sobrenome + '.'

// Jeito novo, template literals, as `` (crases), tão 'super-poderes', através da interpolação (colocando variáveis dentro de uma sring);
var frase2 = `Olá meu nome é ${nome} e meu sobrenome é ${sobrenome}`

