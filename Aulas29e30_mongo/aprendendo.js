const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
  useNewUrlParser: true,
}).then(() => {
  console.log('conectado');
}).catch((err) => {
  console.log('deu erro' + err);
});

const Schema = mongoose.Schema; // Add this line to define the Schema object

const UsuarioSchema = new Schema({
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
  }
});

const Usuario = mongoose.model('usuarios', UsuarioSchema); // Create a model using the schema

new Usuario({
  nome: "Vicotr",
  sobrenome: "Lima",
  email: "sgdfgd@fgdfgss.com",
  idade: 45
}).save().then(() => {
  console.log("usuario criado com sucesso");
}).catch((err) => {
  console.log("Houve erro ao criar o usuario" + err);
});