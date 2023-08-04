import "../styles/login.scss"
import { AiFillFacebook, AiFillInstagram, AiFillLock, AiOutlineRight, AiOutlineTwitter, AiOutlineUser } from "react-icons/ai"
export const Login = () => {
    return (
        <>
            <div className="loginContainer">
                <div className="screen">
                    <div className="screenContent">
                        <form className="login">
                            <div className="loginField">
                                <i className="loginIcon "> <AiOutlineUser /></i>
                                <input type="text" className="loginInput" placeholder="User name / Email" />
                            </div>
                            <div className="loginField">
                                <i className="loginIcon "><AiFillLock /></i>
                                <input type="password" className="loginInput" placeholder="Password" />
                            </div>
                            <button className="button loginSubmit">
                                <span className="buttonText">Log In Now</span>
                                <i className="buttonIcon "> <AiOutlineRight /> </i>
                            </button>
                        </form>
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
