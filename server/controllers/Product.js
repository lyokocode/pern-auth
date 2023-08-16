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

export const updateProduct = async (req, res, next) => {
    const { id } = req.query;
    const updatedFields = req.body;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        Object.keys(updatedFields).forEach((field) => {
            if (field !== 'id') {
                product[field] = updatedFields[field];
            }
        });

        await product.save();

        return res.json({ product });
    } catch (err) {
        next(err)
    }
}