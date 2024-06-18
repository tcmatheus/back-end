require('dotenv').config({ path: `./environments/${process.env.NODE_ENV}.env` });

const express = require("express");
const app = express();
const routes = require("./src/routes");

app.use(express.json());
app.use('/api', routes);

// Determina qual arquivo .env carregar baseado em NODE_ENV
// const envFile = process.env.NODE_ENV === 'production' ? 'prod.env' : 'local.env';

// Carrega o arquivo de variáveis de ambiente
// dotenv.config({ path: `./environments/${envFile}` });

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("SERVIDOR RODANDO NA PORTA: ", PORT));
