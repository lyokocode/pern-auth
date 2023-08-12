import useFetch from "../hooks/useFetch"
import { useParams, Link } from "react-router-dom"
import { AiOutlineUser } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import "../styles/singleUser.scss"
export const SingleUser = () => {
    const { id } = useParams()

    const { data, loading, error } = useFetch(`http://localhost:5000/api/user/user?id=${id}`)
    const { user } = data



    if (loading) {
        return "loading..."
    } else if (error) {
        return "err"
    } else {

        return (

            <main className="singleUser">
                <Link to="/users" className="back">
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
                                <a href="#" className="btn delete">Delete</a>
                                <a href="#" className="btn update">Update</a>
                            </div>
                        </div>
                    </section>
                ) : ("user not found")}
            </main>
        )
    }
}
