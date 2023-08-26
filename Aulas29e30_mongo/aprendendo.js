const mongoose = require("mongoose");

// Configurando o mongoose
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://127.0.0.1/aprendendo", {
    useNewUrlParser: true,
  }).then(() => {
    console.log('MongoDB Conectado...');
  }).catch((err) => {
    console.log('Houve um erro ao se conectar ao MongoDB: ' + err);
  });
// Model - Usuários
// Definindo o Model
  const UsuarioSchema = mongoose.Schema({
    
    nome: {
      type: String,
      require: true
    },

    sobrenome: {
      type: String,
      require: true
    },

    email: {
      type: String,
      require: true
    },

    idade: {
      type: Number,
      require: true
    },

    pais: {
      type: String
    }

  });
// Collection
  mongoose.model('usuarios', UsuarioSchema)

  const Victor = mongoose.model('usuarios')

  new Victor({
    nome: "Victor",

    sobrenome: "Lima",

    idade: 25,

    email: "victor@email.com",

    pais: "Brasil"
  }).save().then(() => {
    console.log("Usuário cadastrado com sucesso!")
  }).catch((err) => {
    console.log("Houve um erro ao registrar o usuário: " + err)
  })
