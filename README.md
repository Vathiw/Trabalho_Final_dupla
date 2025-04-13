# Node.js Express MySQL API

This is a RESTful API built with Node.js, Express, and MySQL.

## Features

- RESTful endpoints for clients and products
- MySQL database integration
- MVC architecture
- Input validation middleware
- Environment configuration
- Error handling

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create MySQL database and tables using the SQL scripts in `models/`
4. Configure environment variables in `.env`
5. Run the development server: `npm run dev`

## API Endpoints

### Clients
- GET /clientes - List all clients
- POST /clientes - Create a new client
- PUT /clientes/:id - Update a client
- DELETE /clientes/:id - Delete a client

### Products
- GET /produtos - List all products
- POST /produtos - Create a new product
- PUT /produtos/:id - Update a product
- DELETE /produtos/:id - Delete a product

## Project Structure

```
├── configs/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── views/
├── .env
├── .eslintrc.json
├── .gitignore
├── package.json
└── README.md
```