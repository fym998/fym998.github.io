import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fym998's blog",
  description: "Fym998's blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      // 当用户位于 `shijian` 目录时，会显示此侧边栏
      '/shijian/': [
        {
          text: '个人网络安全',
          items: [
            { text: '社会工程学攻击', link: '/shijian/社会工程学攻击' },
            { text: '恶意链接', link: '/shijian/恶意链接' },
            { text: '恶意软件', link: '/shijian/恶意软件' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fym998' }
    ]
  }
})
