import { useEffect, useState, type ReactNode } from "react"
import { data } from "../../data/data"
import { ArrowDown, GitBranchIcon, Mail, Tent } from "lucide-react"

interface Props {
    hasAnimated: any
}

export const Hero: React.FC<Props> = (props): ReactNode => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleted, setIsDeleted] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(150)
    const { roles } = data

    useEffect(() => {
        const currentRole = roles[currentTextIndex]
        if (!isDeleted) {
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1))
                }, typingSpeed)
                return () => clearTimeout(timeout)
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleted(true)
                    setTypingSpeed(100)
                }, 2000)
                return () => clearTimeout(timeout)
            }
        } else {
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, currentText.length - 1))
                }, typingSpeed)
                return () => clearTimeout(timeout)
            } else {
                setIsDeleted(false)
                setCurrentTextIndex(prev => (prev + 1) % roles.length)
                setTypingSpeed(150)
            }
        }
    }, [currentText, currentTextIndex, isDeleted, typingSpeed, roles])

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="
        relative 
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-linear-to-br
        from-white dark:from-gray-200
        via-purple-200 dark:via-gray-500
        to-blue-100 dark:to-gray-900
        pt-20
        ">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute -left-40 -right-40 w-80 h-80 bg-linear-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-pink-400 to-orange-600 rounded-full opacity-5 blur-3xl animate-pulse delay-300"></div>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size[50px_50px]"></div>


            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center w-full">
                <div id="hero" className={`transition-all duration-1000 ${props.hasAnimated.hero ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-10'}`}>
                    <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium animate-fade-in">{data.greeting}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl leading-tight font-bold mb-4 bg-linear-to-br from-black dark:from-gray-50 via-gray-600 dark:via-gray-200 bg-clip-text text-transparent animate-fade-in-up">
                        {data.name}
                    </h1>

                    <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-white">
                            我是一个 {' '}
                            <span className="relative">
                                <span className="text-blue-600 dark:text-blue-800 font-bold">
                                    {currentText}
                                    <span className="animate-pulse"></span>
                                </span>
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-blue-500 dark:from-blue-700 to-purple-600 dark:to-purple-700"></span>
                            </span>
                        </h2>
                    </div>

                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        {data.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 animate-fade-in-up delay-300">
                        {data.catButtons.map((button, index) => (
                            <a key={index} href={button.href} className={`group relative px-10 py-3 rounded-lg transition-all duration-300 font-medium text-xl ${button.variant === 'primary' ? 'bg-black text-white shadow-lg hover:shadow-xl hover:bg-gray-800' : 'border-2 border-black text-black hover:bg-black hover:text-white'}`}>
                                {button.variant === 'primary' && (
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                )}
                                <span className={button.variant === 'primary' ? 'relative z-10' : ''}>
                                    {button.text}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up delay-400">
                        {data.socialLinks.map((val, idx) => {
                            const IconComponent = val.icon === 'Aperture' ? GitBranchIcon : val.icon === 'Link' ? Tent : Mail
                            return (
                                <a href={val.url} key={idx} className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                                    <IconComponent className="w-6 h-6 text-gray-700 dark:text-white transition-colors"></IconComponent>
                                </a>
                            )

                        })}
                    </div>

                    <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-500">
                        {data.stats.map((val, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-2xl font-bold text-black dark:text-white mb-1">{val.number}</div>
                                <div className="text-xs text-gray-600  dark:text-white">{val.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="animate-bounce pt-20">
                        <button onClick={scrollToAbout} className="group mx-auto flex flex-col items-center text-gray-600 hover:text-black dark:text-white transition-colors cursor-pointer">
                            <span className="text-sm mb-2">了解更多</span>
                            <ArrowDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform"></ArrowDown>
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute top-20 left-10 w-4 h-4  transition-colors bg-blue-400 dark:bg-blue-800 rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-40 right-20 w-6 h-6  transition-colors bg-purple-400 dark:bg-purple-800 rounded-full opacity-60 animate-float delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-3 h-3  transition-colors bg-green-400 dark:bg-green-800 rounded-full opacity-60 animate-float delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-5 h-5  transition-colors bg-orange-400 dark:bg-orange-800 rounded-full opacity-60 animate-float delay-3000"></div>
        </section>
    )
}