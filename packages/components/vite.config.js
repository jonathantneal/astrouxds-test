import { defineConfig } from 'vite'
import css from '../../.lib/vite.css.js'
import dts from '../../.lib/vite.dts.js'
import ext from '../../.lib/vite.ext.js'

export default defineConfig({
	build: {
		target: 'esnext',
		lib: {
			entry: 'src/index.ts',
			formats: [ 'es' ],
			fileName: () => 'index.js'
		},
	},
	plugins: [
		css(),
		dts(),
		ext(),
	],
})
