import { defineConfig } from 'vitepress'

// ── 统一管理全站日期变量 ────────────────────────────────────
const UPDATE_DATE = '2026年4月18日'
// ──────────────────────────────────────────────────────────

export default defineConfig({
  title: "安隅 (Anyu)",
  description: "记录心情，给内心一份安宁",
  lang: 'zh-CN',
  base: '/anyu-site/',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  lastUpdated: false,

  // 核心修复：将变量注入到 frontmatter 中，避免 TS 类型报警
  transformPageData(pageData) {
    pageData.frontmatter.updateDate = UPDATE_DATE
  },

  themeConfig: {
    logo: '/logo.png',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '功能介绍', link: '/#features' },
      { text: '隐私政策', link: '/legal/privacy' },
      { text: '关于安隅', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hanmiaomiao123/Anyu' }
    ],

    footer: {
      message: `最后更新于：${UPDATE_DATE} | 给内心一份安宁`,
      copyright: 'Copyright © 2026-present 安隅 (Anyu) 团队'
    },

    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '页面大纲', level: [2, 3] },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题模式',
  }
})
