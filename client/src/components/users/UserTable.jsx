import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const UserTable = ({ user, reFetch }) => {

    const { id, img, first_name, last_name, email, isActive, role } = user

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/user/user?id=${id}`);
            reFetch()
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleConfirmDelete = (id) => {
        const confirmed = window.confirm("Delete account?");
        if (confirmed) {
            handleDelete(id);
        }
    };

    return (
        <tr >

            {/* full name */}
            <td className=" left">
                <div>
                    <div>
                        {
                            img ? (
                                <img src={img} alt="user img" />
                            ) : (<AiOutlineUser />)
                        }
                    </div>
                    <span >{first_name} {last_name}</span>
                </div>
            </td>

            {/* email */}
            <td className="left">
                <div >
                    <div >
                        <AiOutlineMail />
                    </div>
                    <span>{email}</span>
                </div>
            </td>

            {/* phone number */}
            <td className=" center users">
                <div >
                    <span>{id}</span>
                </div>
            </td>

            {/* status */}
            <td className="center status">
                <span className={isActive ? 'active' : 'inactive'}>
                    {isActive ? 'Active' : 'Inactive'}
                </span>
            </td>

            {/* role */}
            <td className=" center role ">
                <span className={role}>{role}</span>
            </td>

            {/* actions */}
            <td className=" center actions ">
                <div >
                    <Link to={`/users/${id}`} className="iconContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </Link>
                    <div className="iconContainer" onClick={() => handleConfirmDelete(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                </div>
            </td>
        </tr>
    )
}
