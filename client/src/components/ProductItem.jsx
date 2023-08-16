// ProductItem.js
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useModals, createModal } from '../utils/modal';
import Modal from '../modals';

// Modal işlevini döndüren bir işlev
const modalMap = {
    updateProduct: (product) => <Modal data={product} />,
    // Diğer modalları buraya ekleyin
};

export const ProductItem = ({ product }) => {
    const { id, name, description, price, image } = product;
    const modals = useModals();

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
                        <div className="cart"
                            onClick={() => createModal('updateProduct', product)}
                        >
                            <AiFillSetting size={14} />
                            <button >Update</button>
                        </div>
                    </div>
                </div>
            </Link>
            {modals.map((modal, i) => {
                const renderModal = modalMap[modal.name];
                return renderModal && <div className="modalContainer" key={i}>{renderModal(modal.data)}</div>;
            })}
        </article>
    );
};
