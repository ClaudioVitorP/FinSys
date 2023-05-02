const { Schema, model } = require('mongoose')
const Mongotransacoes = new Schema ({
    descricao : String,
    valor : Number
}, { timestamps: true })

module.exports = model('Transacões', Mongotransacoes )
