# Livro API - README

## Descrição

A **Livro API** é uma aplicação RESTful desenvolvida em **Node.js** com **Express.js** e conectada ao banco de dados **MongoDB** via **Mongoose**. A API permite gerenciar um sistema de livros, autores e editoras, proporcionando funcionalidades para criação, leitura, atualização e exclusão (CRUD). Além disso, ela suporta consultas específicas, como busca de livros por editora ou autor.

---

## Funcionalidades

### Endpoints de Livros

1. **Listar todos os livros**  
   - **GET** `/livros`  
   - Retorna uma lista de todos os livros cadastrados.

2. **Buscar livro por ID**  
   - **GET** `/livros/:id`  
   - Retorna informações de um livro específico pelo seu ID.

3. **Cadastrar um livro**  
   - **POST** `/livros`  
   - Cadastra um novo livro, associando-o a um autor existente.

4. **Atualizar informações de um livro**  
   - **PUT** `/livros/:id`  
   - Atualiza as informações de um livro pelo seu ID.

5. **Excluir um livro**  
   - **DELETE** `/livros/:id`  
   - Remove um livro do banco de dados.

6. **Listar livros por editora**  
   - **GET** `/livros/busca?editora=<nome_da_editora>`  
   - Retorna livros associados a uma editora específica.

---

### Endpoints de Autores

1. **Listar todos os autores**  
   - **GET** `/autores`  
   - Retorna todos os autores cadastrados.

2. **Buscar autor por ID**  
   - **GET** `/autores/:id`  
   - Retorna informações de um autor pelo seu ID.

3. **Cadastrar um autor**  
   - **POST** `/autores`  
   - Cadastra um novo autor.

4. **Atualizar informações de um autor**  
   - **PUT** `/autores/:id`  
   - Atualiza os dados de um autor específico pelo ID.

5. **Excluir um autor**  
   - **DELETE** `/autores/:id`  
   - Remove um autor do banco de dados.

---

## Estrutura do Banco de Dados

### Modelo de Livro
```json
{
  "_id": "ObjectId",
  "titulo": "String",
  "editora": "String",
  "preco": "Number",
  "paginas": "Number",
  "autor": {
    "_id": "ObjectId",
    "nome": "String",
    "nacionalidade": "String"
  }
}
```

### Modelo de Autor
```json
{
  "_id": "ObjectId",
  "nome": "String",
  "nacionalidade": "String"
}
```

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework para construção de APIs REST.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: Modelagem de objetos para MongoDB.
- **dotenv**: Gerenciamento de variáveis de ambiente.

---

## Configuração do Projeto

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados**
   - Crie um arquivo `.env` com a seguinte variável:
     ```
     DB_CONNECTION_STRING=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority
     ```

4. **Inicie o servidor**
   ```bash
   npm start
   ```

5. **Testando a API**
   - Utilize ferramentas como **Postman**, **Insomnia** ou **cURL** para testar os endpoints.

---

## Estrutura do Projeto

```
📂 src
├── 📂 config
│   └── dbConnect.js  # Configuração da conexão com o MongoDB
├── 📂 controllers
│   ├── livroController.js  # Lógica dos endpoints de livros
│   └── autorController.js  # Lógica dos endpoints de autores
├── 📂 models
│   ├── Livro.js  # Modelo de livro
│   └── Autor.js  # Modelo de autor
├── 📂 routes
│   ├── livrosRoutes.js  # Rotas para livros
│   ├── autoresRoutes.js  # Rotas para autores
│   └── index.js  # Configuração central das rotas
└── app.js  # Configuração do servidor Express
```

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias ou correções.

---

**Autor**  
William Wang - Projeto desenvolvido com tutoria da Alura.
