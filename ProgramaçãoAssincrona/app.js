// Exemplo de Programação Assíncrona com SetTimeout

function enviarEmail(corpo, para) {
  setTimeout(() => {
    console.log(`
    Para: ${para}
    ---------------------------------------------------------------
    ${corpo}
    ---------------------------------------------------------------
    De: Sávio 
    `)
  }, 5000)
}

console.log("Inicio do envio de email")
enviarEmail("Oi, seja bem vindo a Formação NodeJs", "teste@gmail.com")
console.log("Email enviado, deve chegar em minutos")
console.log("Tudo OK")