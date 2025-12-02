import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ai-menu-translator/',  // ← 加上这行，改成你的仓库名
  plugins: [react()],
})