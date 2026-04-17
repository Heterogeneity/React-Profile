import type { ReactNode } from "react";

export const ErrorPage = (): ReactNode => {
    return (
        <div className="
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

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center w-full">
                <div className={`transition-all duration-1000 animate-fade-in-up}`}>
                    <h1 className="text-5xl md:text-7xl leading-tight font-bold mb-4 bg-linear-to-br from-black dark:from-gray-50 via-gray-600 dark:via-gray-200 bg-clip-text text-transparent animate-fade-in-up">
                       Code:404 找不到该页面
                    </h1>
                </div>
            </div>

            <div className="absolute top-20 left-10 w-4 h-4  transition-colors bg-blue-400 dark:bg-blue-800 rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-40 right-20 w-6 h-6  transition-colors bg-purple-400 dark:bg-purple-800 rounded-full opacity-60 animate-float delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-3 h-3  transition-colors bg-green-400 dark:bg-green-800 rounded-full opacity-60 animate-float delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-5 h-5  transition-colors bg-orange-400 dark:bg-orange-800 rounded-full opacity-60 animate-float delay-3000"></div>

        </div>
    )

}