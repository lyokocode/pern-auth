import { Outlet } from "react-router-dom"
import { Navbar, Sidebar } from "."
import "../styles/index.scss"
export const Layout = () => {

    return (
        <div className="app">
            <Sidebar />
            <section className="appContainer">
                <Navbar />
                <Outlet />
            </section>
        </div>
    )

}
