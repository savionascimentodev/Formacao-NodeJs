// Callbacks

// Liga-se uma função a algum método assíncrono e quando esse método assíncrono é concluido essa função é chamada.

function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`
    Para: ${para}
    ---------------------------------------------------------------
    ${corpo}
    ---------------------------------------------------------------
    De: Sávio 
    `)
    callback('OK', 5, '8s')
  }, 5000)
}

console.log("Inicio do envio de email")

// ---------------- Função de callback, sem parâmetro ----------------

/* enviarEmail("Oi, seja bem vindo a Formação NodeJs", "teste@gmail.com", () => {
}) */

// ---------------- Função Callback com parâmetros ----------------
enviarEmail("Oi, seja bem vindo a Formação NodeJs", "teste@gmail.com", (status, amount, time) => {
  console.log(`
  Status: ${status}
  -------------------
  Pessoas: ${amount}
  -------------------
  Tempo: ${time}
  `)
})

// ---------------- Tratamento de erros em callbacks ----------------

function uploadPhoto(img, callback) {

  // Lógica da função...
  setTimeout(() => {
    let deuErro = false // true

    if (deuErro) {
      callback('Upload não realizado!')
    } else {
      callback()
    }

  }, 3000)
}

console.log('Inicio do upload de fotos')
uploadPhoto('Imagem', (erro) => {
  if (erro == undefined) { // Tudo certo;
    console.log('Uploado deu certo!')
  } else { // Opa, deu um erro;
    console.log('Ocorreu um erro: ' + erro)
  }
})