import { Mail, Link, Gamepad, FileArchive, Baby, Code2Icon } from "lucide-react"
import type { ReactNode } from "react"

interface Props {
    hasAnimated: any
}

export const About: React.FC<Props> = (props): ReactNode => {
    const feature = [
        {
            icon: <Code2Icon className="w-8 h-8 mb-4 text-black dark:text-white" />,
            title: "屎山代码💩",
            description: "项目周期赶？AI+重复代码猛干，多表查询左右连接猛猛写！🤣"
        },
        {
            icon: <Gamepad className="w-8 h-8 mb-4 text-black dark:text-white" />,
            title: "爱玩单机🎮",
            description: "重度肉鸽玩家，魂类游戏收集者，法环和魂2还没时间玩。😎"
        },
        {
            icon: <FileArchive className="w-8 h-8 mb-4 text-black dark:text-white" />,
            title: "从业经历🐴",
            description: "干过Vue2/Vue3前端，Python爬虫，Node.js(Express)后端。🤖"
        },
        {
            icon: <Baby className="w-8 h-8 mb-4 text-black dark:text-white" />,
            title: "精神状态🙁",
            description: "没找到工作天要塌了，找到工作天塌了。投简历内耗中少话...😭"
        }
    ]
    return (
        <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-600">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${props.hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center">关于我的情况</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 dark:text-white mb-6">
                                我是一名灵活就业的无业游民🤡，拥有2+年创造💩屎山项目的经验。⏰简历"会用"="精通"这块，我会用Vue3，React，Goland还在无力学习中，代码能跑就不要动！
                            </p>
                            <p className="text-lg text-gray-700 dark:text-white mb-6">
                                间歇性奋发图强，持续性混吃等死，少话古法编程中，目前已被AI🤖干入土。我说ClaudeCode是神有没有懂得？
                            </p>
                            <div className="flex space-x-4">
                                <Link className="w-6 h-6 text-gray-600 hover:text-black dark:text-white cursor-pointer transition-colors" />
                                <Mail className="w-6 h-6 text-gray-600 hover:text-black dark:text-white cursor-pointer transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {
                                feature.map((val, idx) => (
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-500" key={idx}>
                                        {val.icon}
                                        <h3 className="font-semibold mb-2">{val.title}</h3>
                                        <p className="text-gray-600 text-sm">{val.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}