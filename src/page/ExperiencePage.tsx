import { ReactNode } from "react";
import { Timeline } from "../components/experience/Timeline";

export const ExperiencePage = (): ReactNode => {
    return (
        <div className="
            relative
            min-h-screen
            overflow-hidden
            bg-linear-to-br
            from-white dark:from-gray-200
            via-purple-200 dark:via-gray-500
            to-blue-100 dark:to-gray-900
            pt-20
        ">
            {/* 背景装饰 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute -left-40 -right-40 w-80 h-80 bg-linear-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-pink-400 to-orange-600 rounded-full opacity-5 blur-3xl animate-pulse delay-300"></div>
            </div>

            {/* 漂浮装饰 */}
            <div className="absolute top-20 left-10 w-4 h-4  transition-colors bg-blue-400 dark:bg-blue-800 rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-40 right-20 w-6 h-6  transition-colors bg-purple-400 dark:bg-purple-800 rounded-full opacity-60 animate-float delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-3 h-3  transition-colors bg-green-400 dark:bg-green-800 rounded-full opacity-60 animate-float delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-5 h-5  transition-colors bg-orange-400 dark:bg-orange-800 rounded-full opacity-60 animate-float delay-3000"></div>

            <div className="relative z-10 container mx-auto px-4 py-15 max-w-6xl">
                {/* 页面标题 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-br from-black dark:from-gray-50 via-gray-600 dark:via-gray-200 bg-clip-text text-transparent">
                        工作经历
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        从过去到现在，每一步都是成长的印记。点击卡片查看详细信息。
                    </p>
                </div>

                {/* 时间线 */}
                <Timeline />

                {/* 总结部分 */}
                <div className="text-center">
                    <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                            职业总结
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            通过多年的工作经历，我积累了丰富的前端开发经验，从Vue到React，从JavaScript到TypeScript，
                            不断学习新技术，提升代码质量和用户体验。每一份工作都让我在技术和软技能上有所成长。
                        </p>
                        <div className="flex justify-center space-x-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">工作年限</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 dark:text-green-400">3</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">家公司</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">项目经验</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}