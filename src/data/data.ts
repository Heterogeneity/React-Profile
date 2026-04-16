export const data = {
    greeting: "🥰 你好，我是",
    name: "Nihilism",
    roles: [
        "无业游民",
    ],
    description: "Time and tide wait for no man.",
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
    { href: '', label: '首页' },
    { href: '#about', label: '关于我' },
    { href: '#projects', label: '练手项目' },
    { href: '#skills', label: '技术栈' },
    { href: '#contact', label: '联系' },
    { href: 'experience', label: '工作经历' },
]