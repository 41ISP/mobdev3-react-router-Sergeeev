import { Link, Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Домой</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>2025</footer>
        </div>
    )
}
export default Layout