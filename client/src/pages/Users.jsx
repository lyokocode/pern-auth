import useFetch from '../hooks/useFetch';
import axios from "axios"
import { Link } from "react-router-dom"
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import '../styles/Users.scss';

export const Users = () => {

    const { data, loading, error, reFetch } = useFetch("http://localhost:5000/api/user")


    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/user/user?id=${id}`);
            reFetch()
            console.log(id)
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

    if (loading) return "loading"
    if (error) return "there is a problem"



    return (
        <div className="users">
            <div className="container">
                <div className="responsive">
                    <div className="content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="left">Full Name</th>
                                    <th className="left">Email</th>
                                    <th className="center">Phone Number</th>
                                    <th className="center">Status</th>
                                    <th className="center">Role</th>
                                    <th className="center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="body">
                                {data && data.map(user => (

                                    <tr key={user.id}>
                                        {/* full name */}
                                        <td className=" left">
                                            <div>
                                                <div>
                                                    {
                                                        user.img ? (
                                                            <img src={user.img} alt="user img" />
                                                        ) : (<AiOutlineUser />)
                                                    }
                                                </div>
                                                <span >{user.first_name} {user.last_name}</span>
                                            </div>
                                        </td>
                                        {/* email */}
                                        <td className="left">
                                            <div >
                                                <div >
                                                    <AiOutlineMail />
                                                </div>
                                                <span>{user.email}</span>
                                            </div>
                                        </td>
                                        {/* phone number */}
                                        <td className=" center users">
                                            <div >
                                                <span>{user.id}</span>
                                                {/* <img src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                                                <img src="https://randomuser.me/api/portraits/men/3.jpg" /> */}
                                            </div>
                                        </td>

                                        {/* status */}
                                        <td className="center status">
                                            <span className={user.isActive ? 'active' : 'inactive'}>
                                                {user.isActive ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        {/* role */}
                                        <td className=" center role ">
                                            <span className={user.role}>{user.role}</span>
                                        </td>
                                        {/* actions */}
                                        <td className=" center actions ">
                                            <div >
                                                <Link to={`/users/${user.id}`} className="iconContainer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </Link>
                                                {/* <div className="iconContainer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div> */}
                                                <div className="iconContainer" onClick={() => handleConfirmDelete(user.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                    <button onClick={reFetch}>Refresh Data</button>
                </div>
            </div>
        </div>
    );
};
