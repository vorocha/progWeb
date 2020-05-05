const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    nome: {
        type : String,
        required: true
    },
    cpf:{
        type: String,
        required: true,
        index: {unique: true} // Não deixa repetir CPF no cadastro
    },
    rg: {
        type:String
    },
    endereco:{
        type:String,
        required:true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    data_nascimento: {
        type: Date
    }
})

//Parâmetros do método mongoose.model()
// 1º -> Nome do Modelo
// 2° -> Estrutura (esquema) do modelo
// 3º -> Nome da coleção (collection) em que os objetos criados
// a partir do modelo serão armazenados no MongoDb

module.exports = mongoose.model('Cliente', esquema, 'clientes');