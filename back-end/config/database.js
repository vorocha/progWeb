const mongoose = require('mongoose');


//start mongodb: sudo systemctl start mongod
module.exports = function(uri){
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify: false,
        createIndexes: true
    });

    mongoose.connection.on('connected', ()=>
        console.log(`Mongoose! Conectado a ${uri}`)
    )

    mongoose.connection.on('disconnected', () =>
        console.log(`Mongoose! desconectado de ${uri}`)
    )

    mongoose.connection.on('error', erro => 
        console.log(`Mongoose! Erro ao conectar a ${uri}: ${erro}`)
    )

    process.on('SIGINT', () => 
        mongoose.connection.close(() => {
            console.log('Mongoose! Desconectado pelo término da aplicação')
            process.exit(0) // 0 => saída sem erros
        })
    )
}