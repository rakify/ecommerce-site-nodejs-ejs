const mongoose = require('mongoose');

//product schema
const ProductSchema = mongoose.Schema({

    seller: {
      type: String,
      required: true,  
    },
    title: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    slug: {
        type: String
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    images: {
        type: Array,
        max: 5,
        min: 1,
        required: true
    },
    image_ids: {
        type: Array,
        max: 5,
        min: 1,
        required: true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Product', ProductSchema);