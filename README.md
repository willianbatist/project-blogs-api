### Observação

Este repositório contem o **Projeto Blogs Api** que reúne o aprendizado desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_ enquanto estudante da [Trybe](https://www.betrybe.com/) :rocket:
**GitHub [Trybe](https://github.com/tryber)**.

# Projeto Blogs Api

#### Habilidades que foram exigidas:

  - Desenvolvimento de API em Node.js;
  - Utilizar Express;
  - Utilizar o Sequelize;
  - Operações basicas no bando de dados: Create, Read, Update e Delete;
  - Utilizar o Docker;
  - Utilizar SQL;
  - Utilizar o MySql;
  - Utilizar JsonWebToken;
  - Arquitetura API Rest e MVC.

---

## Apresentação do Projeto


### Introdução

Esse projeto é uma API, que contém dados de blogs, usuários, posts e as categorias desses posts. Para a realização desse projeto foram usadas as seguintes tecnologias: docker, Node.js, Api Restful, Sequelize, Express e JsonWebToken para a geração de tokens. O Projeto Blogs Api tem como objetivo colocar em prática todo o aprendizado na criação de Api’s com Node.js e Sequelize.


### Inicialização

  Com o docker compose já criado, a primeira forma de fazer funcionar o projeto é utilizando-o da seguinte forma: `docker-compose up -d --build`, assim serão criados dois container, o mysql que rodará na porta 3306, e o segundo onde rodará o projeto. Agora basta digitar `docker exec -it blogs_api bash`, onde entrará no container do projeto, sendo assim só instalar as dependências com `npm install` e por fim rodar com `npm start`. Observação é necessário a utilização de variáveis de ambiente, pelo **.env**.

### Visão Geral

  O projeto segue como base a Arquitetura API Rest e MVC. Como é uma simples aplicação, as Rotas se encontram em App.js, em src/database encontram-se todas as camadas do projeto. As configurações do banco de dados está em config. Já em models, o Sequelize identifica as tabelas e suas colunas, para que na camada de service fiquem as regras de negócios, que devido ao Sequelize abstrai as lógicas de manipulação do banco de dados. Em controllers, estão as funções que lidam com request e response.


### CRUD

Nesse projeto é possível realizar um CRUD, que são as quatro operações básicas utilizadas em bases de dados relacionais fornecidas aos utilizadores do sistema, sendo elas Create, Read, Update e Delete.
  
---
### Trybe

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_
