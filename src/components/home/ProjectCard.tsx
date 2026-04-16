import { Code, WebhookIcon } from "lucide-react";
import type { ReactNode } from "react";

interface item {
    img: string
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
}

interface Props {
    val: item
}

export const ProjectCard: React.FC<Props> = (props): ReactNode => {
    return (
        <div className="
        group 
        bg-white dark:bg-gray-800 
        border 
        border-gray-200 dark:border-gray-600 
        rounded-lg 
        overflow-hidden 
        hover:shadow-lg 
        transition-all
        duration-300
        hover:-translate-y-1
        flex
        flex-col
        h-full
        cursor-pointer
        ">
            <div className="
            h-48 
            bg-linear-to-br 
            from-gray-100
            to-gray-200
            flex
            items-center
            justify-center
            ">
                <div className="
                text-6xl
                font-bold
                text-gray-300
                ">
                    {props.val.img !== "" ? <img src={props.val.img} alt={props.val.title} /> : props.val.title.charAt(0)}
                </div>
            </div>
            <div className="p-6 flex flex-col grow">
                <h3 className="
                text-xl 
                font-semibold 
                mb-3 
                group-hover:text-gray-600 
                transition-colors">
                    {props.val.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">
                    {props.val.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {props.val.tech.map((val, idx) => (
                        <span key={idx} className="
                        px-3
                        py-1
                        bg-gray-100
                        text-gray-700
                        rounded-full
                        text-xs
                        ">
                            {val}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                    <a href={props.val.github}
                        className="
                        flex
                        items-center
                        text-gray-600
                        hover:text-black dark:text-white
                        transition-colors
                        text-sm
                    ">
                        <Code className="w-4 h-4 mr-1" />
                        源码
                    </a>
                    <a href={props.val.demo}
                        className="
                        flex
                        items-center
                        text-gray-600
                        hover:text-black dark:text-white
                        transition-colors
                        text-sm
                    ">
                        <WebhookIcon className="w-4 h-4 mr-1" />
                        网站
                    </a>
                </div>
            </div>
        </div>
    )
} 