import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project-site deployment:
  // Change this to '/YOUR-REPOSITORY-NAME/' if your repo is not named
  // musthak-portfolio. For a username.github.io repo, use '/'.
  base: '/musthak-portfolio1/',
})
