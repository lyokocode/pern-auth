import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const ProductItem = ({ product }) => {
    const { id, name, description, price, image } = product;

    return (
        <article className="productCard">
            <Link to="/products">
                <div className="productInfo">
                    <img src={image} alt={name} />
                </div>
                <div className="productDetail">
                    <h2 className="productName">{name}</h2>
                    <p className="place">{description}</p>
                    <div className="info">
                        <p className="price">${price}</p>
                        <Link
                            to={`/products/${id}`}
                            className="cart"
                        >
                            <AiOutlineEye size={16} />
                            <button>Wiev</button>
                        </Link>
                    </div>
                </div>
            </Link>

        </article>
    );
};
