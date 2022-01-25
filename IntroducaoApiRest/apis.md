### Api

Software, ou biblioteca, que serve para permitir que alguma coisa se comunique com outra, uma camada de comunicação, uma interface de comunicação entra duas ou mais coisas. Servem para facilitar a comunicação entre softwares.

#### Exmplo:

**Api do Youtube** - Retorna todos os resultados de uma busca do Youtube, fazer uploads de vídeos para o youtube.

---

### Web Service

São **APIS** que rodam na web, funcionando pelo protocolo HTTP, são chamadas de **WebService**, serviços que servem para prover uma comunicação entre sistemas.

#### Exmplo:

**Web Service do Paypal** colocar um sistema de pagamento no site da minha loja.

---

### Rest

Na época que os WebServices começaram a existirm cada um tinha seu padrão, deixando assim os programadores confusos, trazendo aplicações dificeis e insustentáveis, não existia padronização, com o tempo foi criado padrões, como o **Rest**.

Para criar uma api padronizada com o **Rest** é necessário seguir essas 5 regras:

- **1 Cliente Servidor**
  - Rest não pode ser cliente e servidor ao mesmo tempo, exemplo MVC, apenas servidor.
- **2 Stateless**
  - Não guardar as informações (estado) das requisições, responde e 'esquece' o cliente.
- **Cacheável**
  - Permitir fazer cash, economizar dados
- **Saber trabalhar com camadas**
  - Não importar se existir algo entra a comunicação com o cliente, um firewal, um proxy, um middleware, ela deverá funcionar normalmente,
- **Interface uniforme e direta**
  - Interface na Web (rotas,end-points,) sempre utilizar os métodos, e ações HTTP: GET,DELETE...,

**Tipo de retorno rest:** pode ser vários tipos de arquivos, textual, JSON, mídias...

#### Restfull

Restfull significa um Api Rest **e** seguindo todas as **padronizações**, **especificações**

#### Exmplo:

**Api de E-commerce**

- **Nivel 0:** Retorna todos os dados em apenas uma rota (end-point);
- **Nível 1:** Quando dividimos recursos em entidades, uma api que retorna recursos para cade tipo de dado (clientes, produtos, pedidos);
- **Nivel 2:** Quando utiliza verbos HTTP;
- **Nível 3:** Além de retornar os dados, também retonar coisas a mais, uma lista de ações possíveis (links de ação, rotas);

### Postman

Uma ferramenta que permite diversos tipos diferenciados de requisições para uma Api e recebendo o retorno.
