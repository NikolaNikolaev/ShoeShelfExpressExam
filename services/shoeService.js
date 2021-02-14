const ShoeOffer = require('../models/ShoeOffer.js');
const authService = require('../services/authService.js');

const getAll = () => { return ShoeOffer.find().lean(); };
const getOne = (shoeOfferId) => { return ShoeOffer.findById(shoeOfferId).lean(); };

const create = ({ name, price, imageUrl, description, brand }, user) => {
    const shoeOffer = new ShoeOffer({ name, price, imageUrl, description, brand, createdAt: Date.now(), creator: user.email });
    return shoeOffer.save();
};

const buyShoes = async (shoeOfferId, userId) => {
    try {
        const shoeOffer = await ShoeOffer.findById(shoeOfferId)
        shoeOffer.buyers.push(userId);
        await authService.addShoeOffer(userId, shoeOfferId);
        return shoeOffer.save();
    } catch (error) { throw err; };
};


module.exports = {
    getAll,
    getOne,
    create,
    buyShoes,
};