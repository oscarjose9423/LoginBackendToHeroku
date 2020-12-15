const { Sequelize, DataTypes } = require('sequelize');

// llamar a la clase usuario/ importar
const UsuarioModelo = require('./usuarios')

const sequelize = new Sequelize('sIY0b9dj7B', 'sIY0b9dj7B', '3btNjQoTqL', {
    host: 'remotemysql.com',
    // puerto por defecto de mysql
    port: '3306',
    dialect: 'mysql'
  });
  
// definicion del modelo
const Usuario = UsuarioModelo(sequelize, Sequelize);

// sequalize en false no sobreescribe las tablas
sequelize.sync({force: false})
  .then(() => {
      console.log('Tablas Sincronizadas');
  })

  // exportación del modelo para su uso
  module.exports = {
    Usuario
  }