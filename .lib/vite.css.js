import * as fs from 'node:fs'
import { transform } from 'esbuild'

export default function () {
	return {
		enforce: 'pre',
		async load(importee) {
			let extensionOfRaw = '?used&raw'

			if (importee.endsWith('.css' + extensionOfRaw)) {
				const pathToFile = importee.slice(0, -extensionOfRaw.length)
				const textOfFile = fs.readFileSync(pathToFile, 'utf-8')
				const transformResult = await transform(textOfFile, {
					loader: 'css',
					minify: true,
					target: undefined
				})
				const codeOfFile = transformResult.code.trim()

				return {
					code: `export default ${JSON.stringify(codeOfFile)};`
				}
			}
		},
	}
}