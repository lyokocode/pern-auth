import useFetch from "../../hooks/useFetch"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { AiOutlineUser } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import "../../styles/user/single.scss"
import { createModal, useModals } from '../../utils/modal';
import Modal from "../../modals"

export const SingleUser = () => {

    const { id } = useParams()


    const { data, loading, error } = useFetch(`http://localhost:5000/api/user/user?id=${id}`)
    const { user } = data
    const navigate = useNavigate()

    const modals = useModals()


    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/user/user?id=${id}`);
            navigate("/users")
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleConfirmDelete = () => {
        const confirmed = window.confirm("Delete account?");
        if (confirmed) {
            handleDelete();
        }
    };


    if (loading) {
        return "loading..."
    } else if (error) {
        return "err"
    } else {

        return (

            <main className="singleUser">
                <Link to=".." className="back">
                    <BiArrowBack size={25} />
                    <>Back to all users</>

                </Link>
                {user ? (
                    <section className="user">
                        <div className="profileCard">
                            <div className="image">
                                {user.image ? (
                                    <img src={user.image} alt="" className="profilePic" />
                                ) : (
                                    <AiOutlineUser className="noImage" />
                                )
                                }
                            </div>
                            <div className="detail">
                                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                                <span>@{user.userName}</span>
                                <span>{user.role}</span>
                                <span>{user.email}</span>
                                <span>{user.phoneNumber}</span>
                            </div>
                            <div className="row">
                                <div className="info">
                                    <h3>Country</h3>
                                    <span>{user.country}</span>
                                </div>
                                <div className="info">
                                    <h3>City</h3>
                                    <span>{user.city ? user.city : "-"}</span>
                                </div>
                                <div className="info">
                                    <h3>Company</h3>
                                    <span>{user.company}</span>
                                </div>
                            </div>
                            <div className="buttons ">
                                <button className="btn delete" onClick={handleConfirmDelete}>Delete</button>
                                <button className="btn update" onClick={() => {
                                    createModal("updateUser")
                                }}>Update</button>
                            </div>
                        </div>
                        {modals.length > 0 && <Modal data={user} />}

                    </section>
                ) : ("user not found")}
            </main>
        )
    }
}
