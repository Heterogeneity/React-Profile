import { useCallback, type ReactNode } from "react";
import { ArrowUp } from "lucide-react"

interface Props {
    show: boolean
}

export const ScrollToTop: React.FC<Props> = (props): ReactNode => {
    // 使用 useCallback：只有当依赖项 [deps] 变化时，才会创建新函数  
    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);

    return (
        props.show ?
            <button onClick={scrollToTop} className="animate-fade-in-up fixed bottom-8 right-8 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg cursor-pointer">
                <ArrowUp className="w-5 h-5"></ArrowUp>
            </button>
            : null
    )
}