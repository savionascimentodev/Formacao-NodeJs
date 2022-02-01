## Programação Síncrona X Programação Assíncrona

---

### Programação Síncrona

Vem de sincronia, de maneira ordenada (na ordem) uma linha de código executa, acabando vai para a próxima, da próxima para a seguinte e por ai vai...

**Por exemplo:**

```php
<?PHP
//....
CheckEmail(), // 1º
Hash(), // 2º
Upload(), // 3º
Save(), // 4º
Email(), // 5º
//....
?>
```

Exemplo em php, uma linguagem síncrona muitas linguagens que derivam do **C** são síncronas.

### O problema da Programação Síncrona

Enquanto enviamos um dado na linguagem síncrona, ele executa o script e só passa para o próximo quando o primeiro for executado, algumas tarefas costumam levar tempo para ser executadas, por exemplo **salvar**, **hash**...

Como a linguagem sincrona passa linha por linha, quando encontra scripts que precisam de tempo, e demoram pra ser executados, o usuário continua vendo uma tela branca esperando tudo carregar **(Ações bloqueantes)**.

Enquanto uma tarefa não acabar o nosso código fica preso naquela tarefa até acabar.

---

### Programação Assíncrona

Vem de assícronia, independente (não depende) da ordem que escrevemos o código

**Por exemplo:**

```js
RequisiçãoSiteExterno() //...
LerArquivo() //..
EnviarEmails() //..
```

Programação Assíncrona é **(Não bloqueante)**, não precisamo esperar a função `RequisiçãoSiteExterno()` terminar, para chamar a `LerArquivo()`, também podendo chamar a `EnviarEmails()`, ao mesmo tempo, sendo que a que tiver menos processamento irá terminar primeiro, não importando a ordem de chamada delas.

Também fazendo o tempo de espera para o usuário ser menor, pois não espera uma tarefa para realizar outra,

---

### Formas de trabalhar com Programação Assíncrona no JavaScript

- Callbacks;
- Promises;
- Async/Await;

Sendo as promises uma **evolução** dos callbacks e async/await sendo uma **evolução** das promisses.
