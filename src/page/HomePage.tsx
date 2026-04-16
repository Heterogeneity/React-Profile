import type { ReactNode } from "react";
import { Skills } from '../components/home/Skills';
import { About } from '../components/home/About';
import { useIntersect } from "../hook/useIntersect";
import { Projects } from "../components/home/Projects";
import { Hero } from "../components/home/Hero";
import { Contact } from "../components/home/Contact";

export const HomePage = (): ReactNode => {
    const hasAnimated = useIntersect()

    return (
        <>
            <Hero hasAnimated={hasAnimated} />
            <About hasAnimated={hasAnimated} />
            <Projects hasAnimated={hasAnimated} />
            <Skills hasAnimated={hasAnimated} />
            <Contact hasAnimated={hasAnimated} />
        </>
    )
}