const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const config = require('../config/defaut')

app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.listen(config.api.porta, () => console.log(`Servidor rodando na porta ${config.api.porta}`))