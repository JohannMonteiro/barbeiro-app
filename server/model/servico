const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicoSchema = new Schema({
    barba: {
        type: Boolean,
        required: true
    },
    cabelo: { 
        type: Boolean,
        required: true
    },
    barbaCabelo: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Servico', servicoSchema);