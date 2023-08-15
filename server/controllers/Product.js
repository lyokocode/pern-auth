import { Product } from "../models/Product.js"

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll()
        return res.status(200).send(products)
    } catch (err) {
        next(err)
    }
}

export const createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);
        newProduct.save()
        return res.status(201).json(newProduct);

    } catch (err) {
        next(err)
    }
}