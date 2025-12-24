const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true
    },
    minThreshold: {
        type: Number,
        required: true
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('InventoryItem', inventorySchema);