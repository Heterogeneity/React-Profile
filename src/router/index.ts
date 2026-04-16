import { createBrowserRouter } from "react-router";
import { HomePage } from "../page/HomePage";
import { ErrorPage } from "../page/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        middleware: [],
        loader: undefined,
        Component: HomePage,
        children: []
    },
    {
        path: "*",
        Component: ErrorPage
    }
], {
    basename: "/React-Profile"   // 关键：与 GitHub Pages 子路径一致
})