const Fornecedor = require('../models/Fornecedor');

const controller = {} //Objeto Vazio

controller.novo = async (req,res) => {
    try {
        await Fornecedor.create(req.body);
        //http Status 201: Created
        res.status(201).send(req.body);
    }
    catch(erro) {
        console.log(erro);
        //HTTP 500: Internal Server Error
        res.status(500).send(erro);
    }
}
module.exports = controller;