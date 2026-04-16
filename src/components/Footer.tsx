import type { ReactNode } from "react";
import { ScrollToTop } from '../components/ScrollToTop';
import { useScrollToTop } from '../hook/useScrollToTop'

export const Footer = (): ReactNode => {
    const showScrollTop = useScrollToTop();
    return (
        <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-500 ">
            <ScrollToTop show={showScrollTop} />
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-600 dark:text-white">
                    © 2026 Nihilism. 搭建工具 React && Tailwind CSS.
                </p>
            </div>
        </footer>
    )
}