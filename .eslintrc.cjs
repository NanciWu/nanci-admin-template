module.exports = {
  env: {
    browser: true, // 支持浏览器环境的检测
    es2021: true, // 支持es2021语法的检测
    node: true // 支持node环境的检测
  },
  extends: [
    'plugin:vue/vue3-essential', // 支持vue3相关语法的检测
    'standard-with-typescript',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest', // 解析文件的时候使用最新的ecmaVersion
    sourceType: 'module' // 文件是ES6模块规范
  },
  plugins: ['vue'],
  rules: {}
}
