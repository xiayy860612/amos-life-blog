import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amos Life",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Language', link: '/langs' }
    ],

    sidebar: [
      {
        text: 'Language',
        items: [
          { text: 'IELTS', link: '/langs/ielts' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiayy860612' }
    ]
  }
})
