import * as $ from '@astrouxds/dom'
import { AnyElement } from './AnyElement'

export class ShadowElement extends AnyElement {
	constructor() {
		const host = super()! as ShadowElement
		const root = $.getShadowRoot(host, { mode: 'open' })
		const constructor = host.constructor! as typeof ShadowElement

		const content = $.create('span', { part: 'content' })
		const style = $.create('style', { part: 'style' })

		$.withChildren(style, constructor.cssText)
		$.withChildren(root, content, style)

		host.update()
	}

	queryPart(parts: string) {
		return $.getShadowRoot(this).querySelector($.getTokenSelector('part', parts))
	}

	update() {
		$.withChildren(this.queryPart('content')!, $.create('slot'))
	}

	static cssText = ''
}
