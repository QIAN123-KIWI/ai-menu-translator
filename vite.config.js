import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ai-menu-translator/", // <--- 关键！加上这一行，对应你的仓库名
})