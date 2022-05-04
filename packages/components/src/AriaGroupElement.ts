import * as $ from '@astrouxds/dom'

export class AriaGroupElement extends HTMLElement {
	constructor() {
		const host = super()! as AriaGroupElement
		const root = $.getShadowRoot(host, { mode: 'open' })
		const constructor = host.constructor! as typeof AriaGroupElement

		const content = createGroup([])
		const style = $.create('style', { part: 'style' })

		$.withChildren(style, constructor.cssText)
		$.withChildren(root, content, style)
	}

	static cssText = ''
}

let createGroup = (items: any[]) => $.withChildren(
	$.withARIA(
		$.withAttributes($.create('span'), { part: 'content' }),
		{
			role: 'radiogroup',
			label: '',
		}
	),
	...items.map(
		() => createGroupItem()
	)
)

let createGroupItem = () => $.withChildren(
	$.withARIA(
		$.create('span'),
		{
			role: 'radio',
			checked: false,
			focusable: true,
		}
	),
	$.create('slot')
)
