import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useModals, createModal } from '../../utils/modal';
import Modal from '../../modals';

const modalMap = {
    updateProduct: (product, reFetch) => <Modal data={product} reFetch={reFetch} />,
};

export const ProductItem = ({ product, reFetch }) => {
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
                            onClick={() => createModal('updateProduct', product, reFetch)}
                        >
                            <AiFillSetting size={14} />
                            <button >Update</button>
                        </div>
                    </div>
                </div>
            </Link>
            {modals.map((modal, i) => {
                const renderModal = modalMap[modal.name];
                return renderModal && <div className="modalContainer" key={i}>{renderModal(modal.data, reFetch)}</div>;
            })}
        </article>
    );
};
