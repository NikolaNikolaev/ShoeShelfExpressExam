const ShoeOffer = require('../models/ShoeOffer.js');

const getAll = () => { return ShoeOffer.find().lean(); };

const create = ({ name, price, imageUrl, description, brand }, user) => {
    const shoeOffer = new ShoeOffer({ name, price, imageUrl, description, brand, createdAt: Date.now(), creator: user.email });
    return shoeOffer.save();
};


module.exports = {
    getAll,
    create,
};