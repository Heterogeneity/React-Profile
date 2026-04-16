import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

interface Props {
    isScrolled: boolean
}

export const Theme: React.FC<Props> = (props): ReactNode => {
    const [mode, setMode] = useState(() => {
        const saveMode = localStorage.getItem('mode')
        if (saveMode === 'light' || saveMode === 'dark') {
            return saveMode
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    useEffect(() => {
        localStorage.setItem('mode', mode)
        if (mode == 'light') {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [mode])

    return (
        <div >
            {
                mode === 'light' ?
                    <Sun className={`transition-all animate-bounce cursor-pointer hover:text-black ${props.isScrolled ? 'text-gray-600 dark:text-white' : 'text-gray-700 dark:text-white'}`} onClick={() => setMode('dark')} /> :
                    <MoonStar className={`transition-all animate-bounce cursor-pointer hover:text-black ${props.isScrolled ? 'text-gray-600 dark:text-white' : 'text-gray-700 dark:text-white'}`} onClick={() => setMode('light')} />
            }
        </div >
    )


}