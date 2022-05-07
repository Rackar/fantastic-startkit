const { viteBundler, defaultTheme } = require('vuepress')

module.exports = {
	bundler: viteBundler(),
	lang: 'zh-CN',
    title: 'Fantastic-template 官网',
    description: '一款开箱即用的 Vue 项目模板，基于 Vue(3.x) & Vite(2.x)',
	base: './',
	dest: 'docs',
    theme: defaultTheme({
        // 头部导航
        navbar: [
			{
				text: '交流社区',
				link: '/channel.md'
			},
			{
				text: '生态',
				children: [
					{
						text: 'Fantastaic-template',
						link: 'https://fantastic-template.netlify.app'
					},
					{
						text: 'Fantastaic-admin',
						link: 'https://hooray.gitee.io/fantastic-admin'
					},
					{
						text: 'One-step-admin',
						link: 'https://hooray.gitee.io/one-step-admin'
					}
				]
			},
            {
                text: 'Gitee',
                link: 'https://gitee.com/hooray/fantastic-template',
            },
            {
                text: 'Github',
                link: 'https://github.com/hooray/fantastic-template',
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    children: [
                        'start.md',
                        'coding-standard.md',
                        'configure.md',
                        'global-resources.md',
                        'router.md',
                        'store.md',
                        'axios.md',
                        'plop.md',
						'library.md',
                        'mobile-support.md',
                        'build.md'
                    ]
                }
            ]
        }
    })
}
