# API RESTful com Node.js, Express e MySQL

Este projeto é uma API RESTful desenvolvida com **Node.js**, **Express** e **MySQL**, seguindo a arquitetura **MVC** para facilitar a organização e manutenção do código.

## ✨ Funcionalidades

- Endpoints REST para gerenciamento de **clientes** e **produtos**
- Integração com banco de dados **MySQL**
- Arquitetura baseada em **MVC** (Model-View-Controller)
- Middleware para **validação de entrada**
- Configuração de variáveis de ambiente com arquivo `.env`
- Tratamento centralizado de **erros**

## 🚀 Como executar o projeto

1. **Clone o repositório**
   ```bash
   git clone <URL-do-repositório>
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Crie o banco de dados MySQL e as tabelas**
   - Use os scripts SQL disponíveis na pasta `models/`

4. **Configure as variáveis de ambiente**
   - Crie um arquivo `.env` com as configurações de acesso ao banco de dados:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=sua_senha
     DB_NAME=nome_do_banco
     PORT=3000
     ```

5. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

## 📌 Endpoints da API

### Clientes

- `GET /clientes` — Lista todos os clientes  
- `POST /clientes` — Cadastra um novo cliente  
- `PUT /clientes/:id` — Atualiza os dados de um cliente  
- `DELETE /clientes/:id` — Remove um cliente  

### Produtos

- `GET /produtos` — Lista todos os produtos  
- `POST /produtos` — Cadastra um novo produto  
- `PUT /produtos/:id` — Atualiza os dados de um produto  
- `DELETE /produtos/:id` — Remove um produto  

## 🗂 Estrutura do Projeto

```
├── configs/           # Configurações do projeto (ex: conexão com o banco)
├── controllers/       # Lógica dos endpoints
├── middlewares/       # Funções intermediárias (validação, autenticação etc.)
├── models/            # Modelos e scripts SQL
├── routes/            # Definição das rotas da API
├── services/          # Lógica de negócio reutilizável
├── views/             # Visualizações, se aplicável
├── .env               # Variáveis de ambiente
├── .eslintrc.json     # Regras de linting
├── .gitignore         # Arquivos e pastas ignorados pelo Git
├── package.json       # Informações e dependências do projeto
└── README.md          # Documentação do projeto
