import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { destroyModal } from '../utils/modal';
import "../styles/modal/newProduct.scss"
import { AiOutlineClose } from 'react-icons/ai';

const NewProduct = () => {
    const { data: categories, loading, error } = useFetch(`http://localhost:5000/api/category`)

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [CategoryId, setSelectedCategoryId] = useState('');
    const [image, setImage] = useState("")


    const generateSlug = text => {
        return text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const handleSubmit = async event => {
        event.preventDefault();


        try {
            await axios.post('http://localhost:5000/api/product', {
                name,
                description,
                image,
                slug: generateSlug,
                price,
                stock,
                CategoryId


            });
            destroyModal()

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    if (loading) return "loading"
    if (error) return "there is a problem"
    return (
        <div className="newProductForm">
            <AiOutlineClose onClick={() => { destroyModal() }} className='closeBtn' size={25} />
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} />

                <label htmlFor="description">Image:</label>
                <input type="text" id="description" value={image} onChange={e => setImage(e.target.value)} />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} />

                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" value={stock} onChange={e => setStock(e.target.value)} />

                <label htmlFor="category">Category:</label>
                <select id="category" value={CategoryId} onChange={e => setSelectedCategoryId(e.target.value)}>
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default NewProduct