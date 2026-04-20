import { ReactNode, useState } from "react";
import { Experience } from "../../types/experience";

interface JobCardProps {
    experience: Experience;
    hasAnimated: boolean;
    isLeft: boolean;
}

export const JobCard = ({ experience, hasAnimated, isLeft }: JobCardProps): ReactNode => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`
                relative rounded-xl p-6
                transition-all duration-500
                ${hasAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
                hover:scale-105 cursor-pointer
                bg-white/80 dark:bg-gray-800/80
                backdrop-blur-sm
                border border-white/30 dark:border-gray-700/30
                shadow-2xl
                hover:shadow-3xl
                before:absolute before:inset-0 before:bg-linear-to-br before:from-blue-500/10 before:to-purple-600/10 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
            `}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* 公司信息头部 */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {experience.position}
                    </h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                        {experience.company}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {experience.startDate} - {experience.endDate}
                        </span>
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {experience.location}
                        </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        在职时长: {experience.duration}
                    </div>
                </div>
            </div>

            {/* 工作描述 */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                {experience.description}
            </p>

            {/* 技术栈 */}
            <div className="flex flex-wrap gap-2 mb-4">
                {experience.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* 成就列表 - 可展开收起 */}
            <div className={`${isExpanded ? 'block' : 'hidden'}`}>
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">主要成就</h5>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                    {experience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>

                {/* 个人感受 */}
                <div className="bg-white/50 dark:bg-gray-700/50 p-4 rounded-lg border border-white/20 dark:border-gray-600/20">
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-2">个人感受</h5>
                    <p className="text-gray-700 dark:text-gray-300 italic">
                        "{experience.personalReflection}"
                    </p>
                </div>
            </div>

            {/* 展开/收起提示 */}
            <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                {isExpanded ? '点击收起 ↑' : '点击展开 ↓'}
            </div>

            {/* 左侧箭头 */}
            {isLeft && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-4 h-4 bg-white/80 dark:bg-gray-800/80" />
            )}
            {/* 右侧箭头 */}
            {!isLeft && (
                <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white/80 dark:bg-gray-800/80" />
            )}
        </div>
    );
};