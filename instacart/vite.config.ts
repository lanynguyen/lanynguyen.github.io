import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// The built app deploys to lanynguyen.github.io/instacart/dist/
export default defineConfig({
  plugins: [react()],
  base: '/instacart/dist/',
})
