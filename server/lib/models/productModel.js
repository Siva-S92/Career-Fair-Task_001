import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        trim: true,
    },
    tags: {
        type: Array,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true,
    },
}, {timestamps: true});

const productModel = mongoose.model("product", productSchema);
export{ productModel }