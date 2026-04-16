import type { ReactNode } from "react";
import { projects } from "../../data/data";
import { ProjectCard } from "./ProjectCard"

interface Props {
    hasAnimated: any
}

export const Projects: React.FC<Props> = (props): ReactNode => {
    return (
        <section id="projects" className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-300 ${props.hasAnimated.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center">想做一些项目</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            projects.map((val, idx) => (
                                <ProjectCard key={idx} val={val} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}