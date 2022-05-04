export default function () {
	return {
		enforce: 'pre',
		resolveId(importee) {
			if (importee === '@astrouxds/dom') {
				return {
					id: importee,
					external: true,
				}
			}
		}
	}
}
