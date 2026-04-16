import { createBrowserRouter } from "react-router";
import { HomePage } from "../page/HomePage";
import { ErrorPage } from "../page/ErrorPage";
import Layout from "../layout";
import { ExperiencePage } from "../page/ExperiencePage";

export const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                path: "/",
                Component: HomePage,
            },
            {
                path: "/*",
                Component: ErrorPage
            },
            {
                path: "/experience",
                Component: ExperiencePage
            }
        ]
    }
], {
    basename: "/React-Profile"   // 关键：与 GitHub Pages 子路径一致
})