const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    default: 0,
  },
  precioDescuento: {
    type: Number,
    default: 0,
  },
  isDescuento: {
    type: Boolean,
  },
  urlPhoto: {
    type: String,
  },
  numberStars: {
    type: Number,
    default: 1,
  },
}, { strict: true });

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;