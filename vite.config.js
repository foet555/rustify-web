import { defineConfig } from 'vite'

// GitHub Pages serves project sites from /<repo>/, while local dev runs at /.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
})
