import { useState } from "react";
import "../styles/modal/updateUser.scss";
import { destroyModal } from "../utils/modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { updateModalPosition } from "../helper/modalPosition";
import { AiOutlineClose } from "react-icons/ai";

const UpdateUser = ({ data }) => {

    const navigate = useNavigate()

    const [newRole, setNewRole] = useState(data.role);

    const handleChangeRole = (role) => {
        setNewRole(role);
    };

    const handleSaveRole = async () => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/user/user?id=${data.id}`,
                { role: newRole }
            );
            console.log("Role updated:", response.data);
            destroyModal();
            navigate("/users")
        } catch (error) {
            console.error("Error updating role:", error);
        }
    };


    const [modalStyle, setModalStyle] = useState({
        top: 200,
        left: 200,
    });

    const handleModalDragStart = updateModalPosition(modalStyle, setModalStyle);


    return (

        <div className="updateUser"
            style={{
                top: modalStyle.top,
                left: modalStyle.left,
            }}
            onMouseDown={handleModalDragStart}
        >
            <button className="closeBtn"
                onClick={() => destroyModal()}><AiOutlineClose size={25} />
            </button>
            <h3>Update User Role</h3>

            <div className="roleOptions">
                <label>
                    <input
                        type="radio"
                        value="customer"
                        checked={newRole === "customer"}
                        onChange={() => handleChangeRole("customer")}
                    />
                    Customer
                </label>
                <label>
                    <input
                        type="radio"
                        value="user"
                        checked={newRole === "user"}
                        onChange={() => handleChangeRole("user")}
                    />
                    User
                </label>
                <label>
                    <input
                        type="radio"
                        value="admin"
                        checked={newRole === "admin"}
                        onChange={() => handleChangeRole("admin")}
                    />
                    Admin
                </label>
                <label>
                    <input
                        type="radio"
                        value="superAdmin"
                        checked={newRole === "superAdmin"}
                        onChange={() => handleChangeRole("superAdmin")}
                    />
                    Super Admin
                </label>
            </div>

            <button className="saveButton" onClick={handleSaveRole}>
                Save Role
            </button>
        </div>
    );
};

export default UpdateUser;
