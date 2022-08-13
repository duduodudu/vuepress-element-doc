module.exports = {
  theme: '',
  title: '组件库文档',
  description: 'VuePress搭建Element的组件库文档教程示例代码',
  base: '/',
  port: '8089',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: {
      '/comps/': [
        '/comps/',
        '/comps/select.md'
      ],
    }
  },
  head: [
    // 引入自定义js
    ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
  ],
  plugins: [
    'demo-container',
    'fulltext-search'
  ],
  markdown: {}
}