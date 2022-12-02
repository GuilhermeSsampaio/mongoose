const mongoose = require("mongoose")

const server = '127.0.0.1:27017'; // COLOQUE O NOME DO SEU SERVIDOR DO BANCO DE DADOS
const database = 'aprendendo';

//configurando mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/aprendendo", {
    // useMongoCliente: true
}).then(() => {
    console.log("conectado ao mongo")
}).catch((err) => {
    console.log("erro de conexão: "+ err)
 }) //catch sempre leva o parametro de erro

//model usuarios

const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String, //define o tipo de dado
        require: true //define se o campo é obrigatório
    },
    email:{
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type: String,
    }
})

//collection usada no model
mongoose.model('usuarios', UsuarioSchema)

const usuario = mongoose.model('usuarios', UsuarioSchema)//fazendo referencia ao modelo do schema

new usuario({
    nome: "gui",
    email: "amp@gmail.com",
    idade: 19,
    pais: "br"
}).save().then(() => {
    console.log("usuario criado com sucesso")
}).catch((err) => { console.log("erro no registro "+ err) })
//o padrao de erro é er mas qualquer coisa pode ser passado no parametro do catch


