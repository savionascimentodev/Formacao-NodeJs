### EcmaScript (ES)

ES significa **EcmaScript**, a Ecma é uma organização que define as **normas** da WEB, O EcmaScript seria uma nova versão com novos recursos são especificações que a Ecma trás para a linguagem Javascript (melhorias, novidades na linguagem).

As principais **especificações**:

- ES6 - Revolucionou o JavaScript;
- ES7
- ES8 - Após essa se fala ES2018, ES209 etc...

---

### Constantes

As constantes tem o mesmo propósito de uma variável (salvar dados), sendo que constantes não mudam de valor, quando se cria uma constante é obrigatório informar o valor dela.

```js
const nome = 'Sávio'
```

---

### Parâmetros Opcionais

```js
function soma(a, b = 50) {
  console.log(a + b)
  // Caso o usuário não informe um segundo parâmetro ele será informado;
}

function soma(a = 40, b = 50) {
  console.log(a + b)
  // Caso o usuário não informe nenhum parâmetro ele será sairá o resultado 90;
}
```

---

### Arrow Function

Arrow Function é apenas uma forma diferente de se escrever uma função, uma forma mais reduzida.

---

### Método de Array Find

Server para achar um único registro dentro de um array.

---
