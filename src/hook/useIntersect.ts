import { useEffect, useState } from "react"


export const useIntersect = (): Object => {
    // 状态对象：存储已经进入过视口的元素 id，格式为 { [elementId]: boolean }
    const [hasAnimated, setHasAnimated] = useState<any>({})

    useEffect(() => {
        // 创建 IntersectionObserver 实例，用于观察元素是否进入视口
        const observer = new IntersectionObserver(
            // 回调函数：当观察的元素进入或离开视口时触发
            (entries) => {
                // 遍历所有发生变化的观察目标
                entries.forEach((v) => {
                    // 检查当前元素是否进入视口且尚未被记录过动画状态
                    if (v.isIntersecting && !hasAnimated[v.target.id]) {
                        // 更新状态，将当前元素的 id 标记为已触发动画
                        setHasAnimated((prev: any) => ({
                            ...prev,                      // 保留之前的状态
                            [v.target.id]: true            // 设置当前元素动画状态为 true
                        }))
                    }
                })
            },
            // IntersectionObserver 配置选项
            {
                threshold: 0.1  // 阈值设置为 0.1，当元素 10% 进入视口时触发
            }
        )

        // 选择文档中所有具有 id 属性的元素，并开始观察它们
        document.querySelectorAll('[id]').forEach(el => observer.observe(el))

        // 清理函数：组件卸载时断开观察者连接，避免内存泄漏
        return () => {
            observer.disconnect()
        }
    }, [hasAnimated])  // 依赖项数组：当 hasAnimated 状态变化时重新运行 effect

    // 返回状态对象，供组件使用
    return hasAnimated
}