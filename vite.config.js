import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포 시 base 경로 설정
// 환경 변수 VITE_BASE가 설정되어 있으면 사용하고, 없으면 루트 경로 사용
// GitHub Actions에서 자동으로 리포지토리 이름을 VITE_BASE로 전달합니다
const base = process.env.VITE_BASE || '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
})

