/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import progress from 'vite-plugin-progress'

export default defineConfig({
  test: {
    globals: true
  },
  plugins: [react(), progress()]
})
