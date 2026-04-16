import { useEffect, useState } from "react"

export const useScrollToTop = (): boolean => {
    // 定义一个状态变量showScrollTop，用于控制是否显示"回到顶部"按钮
    const [showScrollTop, setShowScrollTop] = useState(false)

    // 使用useEffect钩子，在组件挂载时执行
    useEffect(() => {
        // 设置页面滚动行为为平滑滚动（smooth），这样点击回到顶部会有平滑动画效果
        document.documentElement.style.scrollBehavior = 'smooth';

        // 定义滚动事件处理函数
        const handleScroll = () => {
            // 当页面垂直滚动距离超过400像素时，显示回到顶部按钮
            setShowScrollTop(window.scrollY > 400);
        }

        // 为窗口添加滚动事件监听器
        window.addEventListener('scroll', handleScroll)

        // 组件卸载时的清理函数
        return () => {
            // 移除滚动事件监听器，避免内存泄漏
            window.removeEventListener('scroll', handleScroll)
            // 恢复默认的滚动行为（auto）
            document.documentElement.style.scrollBehavior = 'auto'
        }
    }, []) // 空依赖数组表示这个effect只在组件挂载和卸载时执行

    // 返回showScrollTop状态，调用者可以根据这个值决定是否显示回到顶部按钮
    return showScrollTop;
}