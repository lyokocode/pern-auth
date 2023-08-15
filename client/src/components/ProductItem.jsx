import { AiFillSetting, AiOutlineHeart } from "react-icons/ai"
import { Link } from "react-router-dom"


export const ProductItem = ({ product }) => {
    const { name, description, price, image } = product
    return (
        <article className="productCard " >
            <Link to="/products">

                <div className="productInfo">
                    <img src={image} />
                    <div className="star">
                        <AiOutlineHeart size={16} />
                        <button className="text-sm">Add to favorite</button>
                    </div>
                </div>

                <div className="productDetail">
                    <h2 className=" productName">{name}</h2>
                    <p className=" place">{description}</p>

                    <div className="info">
                        <p className="price">${price}</p>

                        <div className="cart  ">
                            <AiFillSetting size={14} />

                            <button >Update </button>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}
