import ts from 'typescript'

export default function (options = {
	allowJs: true,
	declaration: true,
	emitDeclarationOnly: true,
}) {
	let config
	let dtsFiles = {}

	return {
		name: 'vite:dts',
		apply: 'build',
		enforce: 'post',
		async configResolved(resolvedConfig) {
			config = resolvedConfig
		},
		generateBundle() {
			const buildEntry = config.root + '/' + config.build.lib.entry

			const host = Object.assign(
				ts.createCompilerHost(options),
				{
					writeFile(fileName, contents) {
						const relativeFileName = fileName.split('/').at(-1)

						dtsFiles[relativeFileName] = contents
					},
				}
			)

			ts.createProgram([ buildEntry ], options, host).emit()

			for (const fileName in dtsFiles) {
				let source = dtsFiles[fileName]
				this.emitFile({ type: 'asset', fileName, source })
			}
		}
	}
}
