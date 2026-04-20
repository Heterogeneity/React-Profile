import { ReactNode, useEffect, useState } from "react";
import { experiences } from "../../data/data";
import { JobCard } from "./JobCard";
import { Experience } from "../../types/experience";

export const Timeline = (): ReactNode => {
    // 按开始时间倒序排列（最新的在前）
    const sortedExperiences = [...experiences].sort((a, b) => {
        const aDate = new Date(a.startDate + "-01");
        const bDate = new Date(b.startDate + "-01");
        return bDate.getTime() - aDate.getTime();
    });

    // 动画状态
    const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = Number(entry.target.getAttribute("data-id"));
                        setAnimatedItems((prev) => new Set(prev).add(id));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll("[data-id]").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative py-10">
            {/* 时间线中心线 */}
            <div className="hidden rounded-xl md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-11/12 bg-linear-to-b from-blue-500 via-purple-600 to-pink-500" />

            {/* 时间线节点 */}
            <div className="space-y-12">
                {sortedExperiences.map((experience, index) => {
                    const isLeft = index % 2 === 0; // 左侧显示
                    const isAnimated = animatedItems.has(experience.id);

                    return (
                        <div
                            key={experience.id}
                            data-id={experience.id}
                            className={`
                                relative flex items-center
                                ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                                transition-all duration-1000
                                ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}
                        >
                            {/* 时间线节点圆点 */}
                            <div className={`
                                hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6
                                bg-linear-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white/80 dark:border-gray-900/80 shadow-2xl
                                transition-all duration-500
                                ${isAnimated ? 'scale-100' : 'scale-0'}
                            `} />

                            {/* 卡片容器 */}
                            <div
                                className={`w-full md:w-5/12 ${
                                    isLeft ? "md:pr-12" : "md:pl-12"
                                }`}
                            >
                                <JobCard
                                    experience={experience}
                                    hasAnimated={isAnimated}
                                    isLeft={isLeft}
                                />
                            </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};