

import { MdNotifications, MdLightMode } from "react-icons/md"
import "../styles/navbar.scss"

export const Navbar = () => {
    return (
        <header className='navbar '>
            <h1 className=''>
                {/* to do input */}
            </h1>
            <div className="wrapper">
                <div className="items">
                    <div className="item"  >

                        {<MdLightMode className='icon' />}
                    </div>

                    <button className='item'>
                        <MdNotifications className='icon' />
                        <div className="counter" > 0 </div>
                    </button>

                    <div className="item">
                        <img
                            src="https://pbs.twimg.com/profile_images/1634323800392101895/-UYF-zdL_400x400.jpg"
                            alt="Swiss Gadget Logo"
                            className='avatar' />
                    </div>
                </div>
            </div>
        </header>
    )
}
