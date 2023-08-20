import { Category } from "../../models/product/Category.js"
import { Product } from "../../models/product/Product.js"

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.findAll(
            { include: Product }
        )
        return res.status(200).send(categories)
    } catch (err) {
        next(err)
    }
}

export const createCategory = async (req, res, next) => {
    try {
        const newCategory = await Category.create(req.body)
        newCategory.save()
        return res.status(201).json(newCategory);
    } catch (err) {
        next(err)
    }
}