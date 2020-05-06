const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    descricao: {
        type: String,
        riquired: true
    },
    preco_compra: {
        type: Number,
        riquired: true,
        min:0
    },
    preco_venda: {
        type: Number,
        min:0
    },
    data_validade: {
        type: Date
    },
    quantidade: {
        type: Number,
        riquired: true,
        default: 0 // Valor padrão
    },
    unidade_medida: {
        type: String, //unidade, peça, kg, litro
        riquired: true
    },
    categoria: {
        type: String,
        riquired: true,
        default:'Alimentícios'
    },
    fornecedor:{
        type: mongoose.ObjectId ,
        ref: 'Fornecedor', // Nome do Model Referenciado
        required: true
    }
})

//Parâmetros do método mongoose.model()
// 1º -> Nome do Modelo
// 2° -> Estrutura (esquema) do modelo
// 3º -> Nome da coleção (collection) em que os objetos criados
// a partir do modelo serão armazenados no MongoDb

module.exports = mongoose.model('Produto', esquema, 'produtos');