module.exports = (sequelize, type) =>{

    return sequelize.define('usuario', {
        // cuando se necesita definirle varias caracteristicas a un solo atributo se emplea el uso de {}
        // es el caso del atributo id
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        email: type.STRING,
        password: type.STRING,
        rol: type.STRING

    })
} 