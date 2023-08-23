const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/*Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "hgfhfghjyrtjgnbvnyrthrtwerfdgddf fgdfg dfg df"
})
*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Victor",
    sobrenome: "Lima",
    idade: 20,
    email: "sdasdsa@dsadasd.com"
})

// Usuario.sync({force: true})