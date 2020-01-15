const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    measured_by: {
        type: String,
        required:true
    },
    price: {
        type: Number,
    },
    category: {
        type: String
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)