import { Outlet } from "react-router"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

function Layout() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
            <Header />
            <Outlet /> {/* 路由页面会渲染在这里 */}
            <Footer />
        </div>
    )
}

export default Layout