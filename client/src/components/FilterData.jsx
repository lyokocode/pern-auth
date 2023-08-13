import { useState } from "react";
import "../styles/filterModal.scss"
export const FilterData = ({ onFilterApply }) => {
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
        top: 50,
        left: 0,
    });

    const handleModalDragStart = (e) => {
        // const modal = e.currentTarget;
        const initialX = e.clientX - modalStyle.left;
        const initialY = e.clientY - modalStyle.top;

        const handleMouseMove = (e) => {
            const newLeft = e.clientX - initialX;
            const newTop = e.clientY - initialY;

            setModalStyle({
                left: newLeft,
                top: newTop,
            });
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };


    return (
        <div className="filterContainer"
            style={{
                top: modalStyle.top + 'px',
                left: modalStyle.left + 'px',
            }}
            onMouseDown={handleModalDragStart}
        >
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
