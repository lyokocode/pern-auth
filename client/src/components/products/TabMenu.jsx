
import { BiBookOpen, BiBookmark, BiRefresh, BiStar } from "react-icons/bi"
import { MdOutlineCreateNewFolder } from "react-icons/md"
import Modal from "../../modals"
import { useModals, createModal } from '../../utils/modal';


export const TabMenu = ({ reFetch }) => {

    const modals = useModals();

    return (
        <nav className="tabMenu">
            <a className="iconContainer ">
                <BiBookmark size={20} />
                <span>Architecto</span>
            </a>
            <a className="iconContainer">
                <BiBookOpen size={20} />
                <span>Corrupti</span>
            </a>
            <a className="iconContainer">
                <BiStar size={20} />
                <span>Excepturi</span>
            </a>
            <button className="iconContainer"
                onClick={() => {
                    createModal("newProduct")
                }}
            >
                <MdOutlineCreateNewFolder size={20} />
                <span>Create New</span>
            </button>
            <button onClick={() => reFetch()} className="iconContainer">
                <BiRefresh size={20} />
                <span>Refresh Data</span>
            </button>
            {modals.length > 0 && <Modal />}

        </nav>
    )
}
