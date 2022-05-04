import { defineConfig } from 'vite'

export default defineConfig({
	base: './',
	build: {
		minify: true,
		target: 'esnext',
		polyfillModulePreload: false,
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
})
