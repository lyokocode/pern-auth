import { useState } from "react";
import "../styles/modal/filterModal.scss"
import { destroyModal } from "../utils/modal";
import { AiOutlineClose } from "react-icons/ai";
import { updateModalPosition } from "../helper/modalPosition";


const FilterData = ({ data: onFilterApply, }) => {

    const [role, setRole] = useState('');
    const [isActive, setIsActive] = useState('');

    const handleApplyFilter = () => {
        onFilterApply(role, isActive);
    };

    const handleClearFilters = () => {
        setRole('');
        setIsActive('');
        onFilterApply(role, isActive)
    };

    const [modalStyle, setModalStyle] = useState({
        top: 200,
        left: 200,
    });

    const handleModalDragStart = updateModalPosition(modalStyle, setModalStyle);



    return (
        <div className="filterContainer"
            style={{
                top: modalStyle.top,
                left: modalStyle.left,
            }}
            onMouseDown={handleModalDragStart}

        >

            <button className="closeBtn" onClick={() => destroyModal()}><AiOutlineClose size={25} /></button>
            <h3>Filter Users</h3>

            <div className="filterGroup">
                <label>Role:</label>
                <button onClick={() => setRole('superAdmin')}>Super Admin</button>
                <button onClick={() => setRole('admin')}>Admin</button>
                <button onClick={() => setRole('user')}>User</button>
                <button onClick={() => setRole('customer')}>Customer</button>
            </div>

            <div className="filterGroup">
                <label>Status:</label>
                <button onClick={() => setIsActive('true')}>Active</button>
                <button onClick={() => setIsActive('false')}>Inactive</button>
            </div>

            <div className="buttonContainer">
                <button className="applyButton" onClick={handleApplyFilter}>Apply Filter</button>
                <button className="clearButton" onClick={handleClearFilters}>Clear Filter</button>
            </div>
        </div>
    )
}

export default FilterData


