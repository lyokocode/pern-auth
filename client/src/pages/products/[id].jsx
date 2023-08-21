import { Link, useParams } from "react-router-dom"
import "../../styles/products/single.scss"
import useFetch from "../../hooks/useFetch"
import { AiOutlineSetting, AiOutlineStock } from "react-icons/ai"
import { createModal, useModals } from "../../utils/modal"
import Modal from "../../modals"
import { BiArrowBack } from "react-icons/bi"
export const SingleProduct = () => {
    const { id } = useParams()

    const { data: product, loading, error, reFetch } = useFetch(`http://localhost:5000/api/product/product?id=${id}`)

    const { image, name, stock, price, description } = product

    const modals = useModals()

    if (loading) {
        return "loading..."
    } else if (error) {
        return "there is a error"
    } else {
        return (
            <div className="singleProduct">
                <Link to="..">
                    <BiArrowBack size={18} />
                </Link>
                <div
                    className="productContainer   ">

                    {/* product image */}
                    <div className="imageContainer ">
                        <img src={image} alt={`${name} image`} />
                    </div>
                    <div className="product ">
                        <div className="detail">

                            {/* stock detail */}
                            <div className="stock">
                                <AiOutlineStock />
                                <p className=" stock">
                                    {stock}
                                    <span> in stock</span>
                                </p>
                            </div>

                            {/* action */}
                            <button className="actionBtn" onClick={() => {
                                createModal("updateProduct")
                            }}>
                                <AiOutlineSetting size={16} />
                                <span>Update</span>
                            </button>
                        </div>

                        <div className="info">

                            {/* product name */}
                            <h3 className="title">{name}</h3>

                            {/* product description */}
                            <p className="description ">{description}</p>

                            {/* product price */}
                            <p className="price ">${price}</p>
                        </div>
                    </div>
                </div>
                {modals.length > 0 && <Modal data={product} reFetch={reFetch} />}

            </div>
        )
    }
}
