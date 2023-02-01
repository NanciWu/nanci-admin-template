import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'typings/components.d.ts', //在根目录新建一个typings文件夹，所有的TypeScript类型定义文件(文件名后缀为.d.ts)都放在这
      dirs: ['src/components'] //默认情况下，此插件将导入`src/components`路径中的组件。这里可以自己设置
    })
  ]
})
