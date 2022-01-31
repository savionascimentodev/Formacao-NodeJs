### JWT

Quando desenvolvemos uma Api, não podemos deixar aberta essas rotas, para qualquer um acessar, por isso hoje em dia existe técnicas para adicionar autenticação em Apis, a mais popular é a **JWT (Json Web Token)**, uma das formas mais eficientes e seguras de autenticação em uma Api.

#### Como Funciona?

Com base em uma senha que definimos dentro da nossa Api, toda vez que um usuário entrar com um login e senha válidos a aplicação gera um **token criptografado**, que é utilizado para acessar todas as rotas da aplicação **(cada requisição que o usuário fazer)**, essa é a principal **diferença**, de um método de seção (login comum).

Os testes serão feitos na mesma Api de Games, já feita.
