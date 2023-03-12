const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({ 
    nome: {
        type: String,
        required: true
    },
    sobreNome: {
        type: String,
        required: true

    },
    dataNascimento: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cliente', clienteSchema);