import { useEffect, useState, type ReactNode } from "react";
import { navItems } from "../data/data";
import { Menu, X } from "lucide-react";
import { Theme } from "./Theme";
import { useLocation, useNavigate } from "react-router";

export const Header = (): ReactNode => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const scrollToSection = (href: string) => {
        if (href === '/' || href === "/experience") {
            navigate(href)
            return
        }
        const el = document.querySelector(href) as HTMLElement
        if (el) {
            const navH = 60
            const elPos = el.offsetTop - navH
            window.scrollTo({
                top: elPos,
                behavior: 'smooth'
            })
        }
        closeMobileMenu()
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-800/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className={`text-xl font-bold transition-colors cursor-pointer hover:opacity-80 ${isScrolled ? 'text-gray-600 dark:text-white' : 'text-gray-700 dark:text-white'}`} onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0 }) }}>Nihilism</div>
                </div>

                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map(item => (
                        <a className={`transition-colors font-semibold hover:text-black ${location.pathname === '/' && item.href === '/' ? 'hidden' : ''} ${isScrolled ? 'text-gray-600 dark:text-white' : 'text-gray-700 dark:text-white'}`} href={item.href} key={item.href} onClick={e => {
                            e.preventDefault()
                            scrollToSection(item.href)
                        }}>{item.label}</a>
                    ))}
                    <Theme isScrolled={isScrolled} />
                </div>


                <div className="md:hidden flex items-center">
                    <Theme isScrolled={isScrolled} />
                    <button onClick={toggleMobileMenu} className={`ml-2 p-2 transition-colors cursor-pointer hover:text-black dark:text-white ${isScrolled ? 'text-gray-600' : 'text-gray-700'}`}>
                        {isMobileMenuOpen ? <X className="w-6 h-6"></X> : <Menu className="w-6 h-6"></Menu>}
                    </button>
                </div>

            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-65 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="bg-white dark:bg-gray-800 border border-gray-100 rounded-lg shadow-lg p-4 space-y-4">
                    {navItems.map(item => (
                        <a className={`block text-gray-600 hover:text-black dark:text-white transition-colors py-2 ${location.pathname === '/' && item.href === '/' ? 'hidden' : ''}`} href={item.href} key={item.href} onClick={e => {
                            e.preventDefault()
                            scrollToSection(item.href)
                        }}>{item.label}</a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
}