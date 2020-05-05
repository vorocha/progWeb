const mongoose = require('mongoose');
const mongooseSeq = require('mongoose-sequence')(mongoose);
//yarn add mongoose-sequence

const esquema = mongoose.Schema({
    data_venda:{
        type: Date,
        required:true
    },
    forma_pagamento:{
        type: String,
        required: true,
        enum: ['DI', 'CH', 'CC', 'CD']
        //DI: dinheiro
        //CH: cheque
        // CC: cartão de credito
        //CD: cartão de debito
    },
    data_pagamento: {
        type: Date
    },
    num_venda: {
        type: Number,
        index: {unique:true}
    },
    cliente:{
        type: mongoose.ObjectId,
        ref: 'Cliente', // referencia outro model 
        required: true
    }
})

//inc_field = campo a ser autoincrementado
esquema.plugin(mongooseSeq, {inc_field: 'num_venda', start_seq: 1});

//Parâmetros do método mongoose.model()
// 1º -> Nome do Modelo
// 2° -> Estrutura (esquema) do modelo
// 3º -> Nome da coleção (collection) em que os objetos criados
// a partir do modelo serão armazenados no MongoDb


module.exports = mongoose.model('Venda', esquema, 'vendas');