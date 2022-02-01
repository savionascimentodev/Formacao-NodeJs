### O que é HTTP?

Protocolo de Transferência de dados na Web, a comunicação de um cliente (navegador) e o servidor acontece graças a esse protocolo, **Hyper Text Transfer Protocol**, o cliente manda uma requisição sobre uma pesquisa no google, e essa requisição é processada pelo servidor que tem a tarefa de enviar a resposta.

### Verbos HTTP, Métodos ou Ações

Formas de dizer como a **requisição** será **feita**.

| Verbo  | Objetico                           | Usado       | Multiplas Requisições | Cache/BookMark |
| ------ | ---------------------------------- | ----------- | --------------------- | -------------- |
| GET    | Retona dados de um servidor        | links       | yes                   | yes            |
| POST   | Cria um novo item                  | formulário  | no                    | no             |
| PUT    | Para atualizar dados, edição       | formulário  | yes                   | no             |
| PATCH  | Para atualizar campos parcialmente | formulário  | no/yes                | no             |
| DELETE | Serve para exlcuir dados           | forms/links | yes                   | no             |

### Status Code

O código de status (status code) serve para dizer o **ocorrido** na requisição **(sucesso, erro, página não existe)**

- 1XX - Informação;
- 2XX - Sucesso;
- 3XX - Redirecionamento;
- 4XX - Erro do cliente;
- 5XX - Erro do servidor;

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status.
