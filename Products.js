const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    instock: { type: Boolean, default: true },
    completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Products', productsSchema);                                          