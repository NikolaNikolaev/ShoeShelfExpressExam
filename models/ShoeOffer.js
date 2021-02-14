const mongoose = require('mongoose');

const shoeOfferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    buyers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
});

// •	Name - string (required), unique
// •	Price - number (required), min value 0,
// •	Image Url - string (required),
// •	brand - string
// •	Created at – Date or String, required
// •	buyers - a collection of Users

module.exports = mongoose.model('ShoeOffer', shoeOfferSchema);

