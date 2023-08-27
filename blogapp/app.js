// Carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require('./routes/admin')
    const path = require('path')
    const mongoose = require('mongoose')
// Configurações
    // Body Parser
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());
    // Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://127.0.0.1/blogapp', {
            useNewUrlParser: true,
        }).then(() => {
            console.log("Conectado ao mongodb")
        }).catch((err) => {
            console.log("Erro ao se conectar ao mongodb: " + err)
        })
    // Public
        app.use(express.static(path.join(__dirname, "public")))
// Rotas
    app.get('/', (req, res) => {
        res.send("Rota principal")
    })

    app.get('/posts', (req, res) => {
        res.send("Lista de Posts")
    })

    app.use('/admin', admin)
// Outros
const PORT = 8089
app.listen(PORT, () => {
    console.log("Servidor rodando!")
})