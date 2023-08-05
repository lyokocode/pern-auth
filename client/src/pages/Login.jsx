import { useEffect, useState } from "react"
import axios from "axios"
import { loginFailure, loginSuccess } from '../store/authSlice';
import { AiFillFacebook, AiFillInstagram, AiFillLock, AiOutlineRight, AiOutlineTwitter, AiOutlineUser } from "react-icons/ai"
import "../styles/login.scss"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { user, error } = useSelector(state => state.auth)

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                userName,
                password,
            });

            dispatch(loginSuccess(response.data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Giriş sırasında bir hata oluştu';
            dispatch(loginFailure(errorMessage));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])


    return (
        <>
            <div className="loginContainer">
                <div className="screen">
                    <div className="screenContent">
                        <form
                            className="login"
                            onSubmit={handleLogin}
                        >
                            <div className="loginField">
                                <i className="loginIcon "> <AiOutlineUser /></i>
                                <input
                                    type="text" className="loginInput" placeholder="User name / Email"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="loginField">
                                <i className="loginIcon "><AiFillLock /></i>
                                <input
                                    type="password" className="loginInput" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="button loginSubmit">
                                <span className="buttonText">Log In Now</span>
                                <i className="buttonIcon "> <AiOutlineRight /> </i>
                            </button>
                        </form>
                        {error && <div style={{ color: 'red' }}>{error}</div>}


                        <div className="socialLogin">
                            <h3>log in via</h3>
                            <div className="socialIcons">
                                <a href="#" className="socialLoginIcon "> <AiFillInstagram /> </a>
                                <a href="#" className="socialLoginIcon"><AiFillFacebook /></a>
                                <a href="#" className="socialLoginIcon"><AiOutlineTwitter /></a>
                            </div>
                        </div>
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
