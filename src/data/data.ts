export const data = {
    greeting: "🥰 你好，我是",
    name: "Nihilism",
    roles: [
        "灵活就业人员",
    ],
    description: "这是一个静态挂载的个人介绍页，感谢你的访问。",
    stats: [
        { number: "2+", label: "项目经验年" },
        { number: "10+", label: "项目数量" },
        { number: "200+", label: "个人项目目标" }
    ],
    socialLinks: [
        {
            name: "Aperture",
            url: "https://github.com/Heterogeneity",
            icon: "Aperture"
        },
        {
            name: "Link",
            url: "https://space.bilibili.com/50025593",
            icon: "Link"
        },
        {
            name: "Email",
            url: "mailto:1390303319@qq.com",
            icon: "Mail"
        }
    ],
    catButtons: [
        {
            text: "练手项目",
            href: "#projects",
            variant: "primary"
        },
        {
            text: "联系我",
            href: "#contact",
            variant: "secondary"
        }
    ]
}

export const projects = [
    {
        img: "Nihilism-1.0.png",
        title: "Nihilism Blog 1.0(已完成)",
        description: "我的个人博客网站1.0(API三层架构)",
        tech: ["Gin", "Vue3", "Redis", "ElasticSearch", "MySQL"],
        github: "https://github.com/Heterogeneity/Nihilism-Blog-Vue3",
        demo: "https://github.com/Heterogeneity/Nihilism-Blog-Vue3"
    },
    {
        img: "",
        title: "Nihilism Blog 2.0(开发中)",
        description: "我的个人博客网站2.0(清洁架构)",
        tech: ["Fiber", "Next.js", "Redis", "Minio", "PostgresSQL"],
        github: "",
        demo: ""
    }
]

export const skills = [
    {   category: 
        "前端(擅长)", 
        item: [
        "Vue2/3", 
        "React", 
        "Next.js"
    ] },
    { category: "后端(一般)", item: ["Go(Gin & Fiber)", "Node.js(Express)", "Python(爬虫)", "PHP(ThinkPHP)"] },
    { category: "数据库(一般)", item: ["Redis", "MySQL", "PostgreSQL", "ElasticSearch"] },
    { category: "工具(擅长)", item: ["Linux", "Git", "Nginx", "Docker"] }
]

export const contactLinks = [
    {
        href: "mailto:1390303319@qq.com",
        label: "Email",
        className: "text-black dark:text-white px-4 py-2 rounded-lg bg-black hover:bg-gray-800 transition-colors text-sm font-medium"
    },
    {
        href: "https://github.com/Heterogeneity",
        label: "GitHub",
        className: "border border-black text-black dark:text-white px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors text-sm font-medium"
    },
    {
        href: "https://space.bilibili.com/50025593",
        label: "Bilibili",
        className: "border border-black text-black dark:text-white px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors text-sm font-medium"
    }
]


export const navItems = [
    { href: '/', label: '首页' },
    { href: '#about', label: '关于我' },
    { href: '#projects', label: '练手项目' },
    { href: '#skills', label: '技术栈' },
    { href: '#contact', label: '联系' },
    { href: '/experience', label: '工作经历' },
]

export const experiences = [
    {
        id: 1,
        company: "广州显生宙科技有限公司",
        position: "全栈开发工程师",
        startDate: "2025-03",
        endDate: "2025-02",
        duration: "11个月",
        location: "广州(宁德市福鼎驻场)",
        description: "负责公司核心产品的内网系统更新与内网登录模块的编写，文生图与文生PPT部署与二次开发，网站数据爬虫脚本编写。机房服务器维护与项目更新。",
        achievements: [
            "通过爬虫脚本获取模型训练数据",
            "对接内网登录模块",
            "文生图与文生PPT全栈开发"
        ],
        technologies: ["Vue", "Express", "MySQL", "Vite","Python"],
        personalReflection: "在这段时间里，我不仅技术能力得到了提升，更重要的是学会了如何在压力下保持代码质量。最大的收获是对用户体验有了更深的理解。"
    },
    {
        id: 2,
        company: "宁德市鸿凯网络科技有限公司",
        position: "软件开发工程师",
        startDate: "2023-07",
        endDate: "2024-02",
        duration: "8个月",
        location: "宁德",
        description: "参与公司电商平台的前端开发，负责邀请码，系统抽奖，秒杀功能，支付功能等核心功能的开发。客服系统后端消息分发模块使用Node.js+express框架+nsq消息队列+Socket.IO实现。单聊与群聊页面开发。商品卡片与客服转接功能开发。",
        achievements: [
            "完善商城项目的功能",
            "构建客服系统的前端与消息分发功能",
            "参与微前端架构设计，提高开发效率"
        ],
        technologies: ["Vue2", "Nuxt2", "Express","Uniapp", "Nsq消息队列","Socket.IO"],
        personalReflection: "这是我第一次接触大型电商项目，学到了很多关于性能优化和大型项目架构的知识。也让我意识到代码可维护性的重要性。"
    },
    {
        id: 3,
        company: "厦门市泰豫网络科技有限公司",
        position: "	软件开发工程师（兼职）",
        startDate: "2022-04",
        endDate: "2022-07",
        duration: "3个月",
        location: "厦门",
        description: "企业介绍站与微信小程序静态页面开发。",
        achievements: [
            "从零搭建公司官网前端",
            "从零搭建微信小程序前端"
        ],
        technologies: ["Vue2","微信小程序"],
        personalReflection: "创业公司的经历让我学会了如何在资源有限的情况下快速开发产品，也锻炼了我的开发能力。虽然辛苦但收获很大。"
    }
]