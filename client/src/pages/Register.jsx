import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import { loginSuccess } from '../store/authSlice';
import "../styles/register.scss"
import { AiFillLock, AiOutlineMail, AiOutlinePhone, AiOutlineRight, AiOutlineUser } from "react-icons/ai"
import { BsFillFlagFill } from "react-icons/bs"
import { MdConfirmationNumber } from "react-icons/md"

export const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                first_name: firstName,
                last_name: lastName,
                userName,
                phoneNumber,
                email,
                company,
                country,
                password,
            });

            dispatch(loginSuccess(response.data));
            navigate("/"); // Kayıt başarılı, ana sayfaya yönlendir.
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Kayıt işlemi sırasında bir hata oluştu";
            setError(errorMessage);
        }
    };

    return (
        <>
            <div className="registerContainer">
                <div className="screen">
                    <div className="screenContent">
                        <form
                            className="login"
                            onSubmit={handleRegister}
                        >
                            <div className="inputContainer">
                                <div className="left">
                                    <div className="loginField">
                                        <i className="loginIcon "> <AiOutlineUser /></i>
                                        <input
                                            type="text" className="loginInput" placeholder="First Name "
                                            value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="loginField">
                                        <i className="loginIcon "> <AiOutlineUser /></i>
                                        <input
                                            type="text" className="loginInput" placeholder="Last Name"
                                            value={lastName} onChange={(e) => setLastName(e.target.value)}

                                        />
                                    </div>
                                    <div className="loginField">
                                        <i className="loginIcon "> <AiOutlineUser /></i>
                                        <input
                                            type="text" className="loginInput" placeholder="User name"
                                            value={userName} onChange={(e) => setUserName(e.target.value)}

                                        />
                                    </div>
                                    <div className="loginField">
                                        <i className="loginIcon "> <AiOutlinePhone /></i>
                                        <input
                                            type="text" className="loginInput" placeholder="Phone Number"
                                            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}

                                        />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="loginField">
                                        <i className="loginIcon "><AiOutlineMail /></i>
                                        <input
                                            type="email" className="loginInput" placeholder="Email"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="loginField">
                                        <i className="loginIcon "><MdConfirmationNumber /></i>
                                        <input
                                            type="text" className="loginInput" placeholder="company"
                                            value={company} onChange={(e) => setCompany(e.target.value)}
                                        />
                                    </div>
                                    <div className="loginField">
                                        <i className="loginIcon "><BsFillFlagFill /></i>
                                        <input
                                            type="text" className="loginInput" placeholder="Country"
                                            value={country} onChange={(e) => setCountry(e.target.value)}
                                        />
                                    </div>
                                    <div className="loginField">
                                        <i className="loginIcon "><AiFillLock /></i>
                                        <input
                                            type="password" className="loginInput" placeholder="Password"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="buttonContainer">
                                <button className="button loginSubmit">
                                    <span className="buttonText">Log In Now</span>
                                    <i className="buttonIcon "> <AiOutlineRight /> </i>
                                </button>

                                <div className="socialLogin">
                                    <h4>Already have an account?</h4>
                                    <Link to="/login">login</Link>
                                </div>

                            </div>
                            {error && <div style={{ color: "red" }}>{error}</div>}
                        </form>

                    </div>
                    <div className="screenBackground">
                        <span className="screenBackgroundShape screenBackgroundShape1"></span>
                        <span className="screenBackgroundShape screenBackgroundShape2"></span>
                        <span className="screenBackgroundShape screenBackgroundShape3"></span>
                        <span className="screenBackgroundShape screenBackgroundShape4"></span>
                    </div>
                </div>
            </div>
        </>
    )
}
