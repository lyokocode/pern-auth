import { Product } from "../../models/product/Product.js"

// GET ALL PRODUCTS
export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll()
        return res.status(200).send(products)
    } catch (err) {
        next(err)
    }
}

// GET PRODUCT
export const getProduct = async (req, res, next) => {
    const { id } = req.query;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found!' });
        }
        return res.status(200).json(product);

    } catch (err) {
        next(err)
    }
}

// CREATE NEW PRODUCT
export const createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);
        newProduct.save()
        return res.status(201).json(newProduct);

    } catch (err) {
        next(err)
    }
}

// UPDATE PRODUCT
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

// DELETE PRODUCT
export const deleteProduct = async (req, res, next) => {
    const { id } = req.query;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found!' });
        }

        await Product.destroy({
            where: {
                id: product.id
            }
        });

        return res.status(200).json({ message: 'Product has been deleted' });
    } catch (err) {
        next(err)
    }
}