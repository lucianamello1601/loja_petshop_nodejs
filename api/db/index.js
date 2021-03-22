const Sequelize = require('sequelize')
const config = require('../../config/defaut')

const instancia = new Sequelize(
    config.mysql.db,
    config.mysql.usuario,
    config.mysql.senha,
    {
        host: config.mysql.host,
        dialect: 'mysql'
    }
)

module.exports = instancia