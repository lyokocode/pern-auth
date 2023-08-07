import { Outlet } from "react-router-dom"
import { Navbar } from "."

export const Layout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )

}
