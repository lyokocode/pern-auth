import { useState } from "react"
import "../styles/modal/updateProduct.scss"
import axios from "axios"
import { destroyModal } from "../utils/modal";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from 'prop-types';



const UpdateProduct = ({ data: product, reFetch }) => {
    const [name, setName] = useState(product?.name || "")
    const [description, setDescription] = useState(product?.description || "")
    const [price, setPrice] = useState(product?.price || "")
    const [stock, setStock] = useState(product?.stock || 0)


    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            await axios.put(`http://localhost:5000/api/product/product?id=${product?.id}`, {
                name, description, price, stock
            }
            )
            reFetch()
            destroyModal()
        } catch (err) {
            console.log(err)
        }
        destroyModal()
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/product/product?id=${product?.id}`);
            reFetch()
            destroyModal()
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (

        <>
            <form className="updateProduct "
                onSubmit={handleSubmit}
            >
                <AiOutlineClose onClick={destroyModal} className="closeBtn" size={25} />

                <img src={product?.image} alt="Product Image" />
                <div className="p-4">
                    {/* <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2> */}
                    <input type="text" className="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="text" className="desc"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div className="detail">
                        <input type="text" className="price"
                            value={`${price}`}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <select name="" id="">
                            <option value="">test</option>
                        </select>
                        <div className="stock">
                            <input type="text"
                                value={stock}
                                onChange={e => setStock(e.target.value)}
                            />
                            <p > in stock</p>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button type="submit" className="submit">Update</button>
                    <button type="button" className="delete" onClick={handleDelete}>Delete</button>
                </div>
            </form>
        </>
    )
}
UpdateProduct.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    reFetch: PropTypes.func.isRequired,
};


export default UpdateProduct