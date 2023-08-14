import "../styles/sidebar.scss"

import { MdDashboard, MdNotifications, MdSettingsSystemDaydream, MdOutlinePsychology, MdSettingsApplications, MdLogout } from "react-icons/md"
import { AiOutlineUser, AiFillCreditCard } from "react-icons/ai"
import { SiExpensify, SiHomeassistantcommunitystore } from "react-icons/si"
import { FaTruck } from "react-icons/fa"
import { BiUserCircle } from "react-icons/bi"
import axios from "axios"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { destroyModal } from "../utils/modal";


export const Sidebar = () => {
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const handleLogout = async () => {
        if (user) {
            try {
                await axios.post(`http://localhost:5000/api/auth/logout/${user.id}`);
                dispatch(logout()); // Clear user info from Redux store
            } catch (error) {
                console.error('Logout error:', error);
            }
        }
    };


    return (
        <div className='sidebar '
            onClick={e => e.stopPropagation(destroyModal())}
        >
            <div className="top">
                <Link to="/">
                    <h1>aelita</h1>
                </Link>
            </div>
            <div className="hr"></div>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <Link to="/">
                        <li>
                            <MdDashboard className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">Lists</p>
                    <Link to="/users">
                        <li>
                            <AiOutlineUser className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            <SiHomeassistantcommunitystore className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            <AiFillCreditCard className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>
                    <li>
                        <FaTruck className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <Link to="/">
                        <li>
                            <SiExpensify className="icon" />
                            <span>Expense</span>
                        </li>
                    </Link>
                    <li>
                        <MdNotifications className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <MdSettingsSystemDaydream className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <MdOutlinePsychology className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <MdSettingsApplications className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <BiUserCircle className="icon" />
                        <span>Profile</span>
                    </li>
                    <li onClick={handleLogout}>
                        <MdLogout className="icon" />
                        <span>Logout</span>
                    </li>
                    <div className="bottom">
                        <button className="color-option" > </button>
                        <button className="color-option" > </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
