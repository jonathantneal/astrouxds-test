import * as t from './types'

// Trees
// -------------------------------------

export let withChildren = <T extends ParentNode>(host: T, ...content: t.Children[]): T => host.append(...content as any) as undefined || host

export let withParent = <T extends ChildNode>(host: T, node: ParentNode): T => node.append(host) as undefined || host

export let create = <T extends string>(
	name: T,
	init?: {
		is?: string
		namespace?: 'http://www.w3.org/1999/xhtml' | 'http://www.w3.org/2000/svg' | t.anystring
	} & t.ElementAttributesByName<Lowercase<T>> | null,
	...children: t.Children[]
) => {
	let { is, namespace = 'http://www.w3.org/1999/xhtml', ...attributes } = Object(init) as any

	return withChildren(
		withAttributes(
			document.createElementNS(namespace, name, attributes as ElementCreationOptions),
			attributes as any
		),
		...children
	) as t.HTMLElementType<Lowercase<T>>
}

// Properties and Attributes
// -------------------------------------

export let toggleAttribute = <T extends Element>(host: T, name: string, value: t.primitive) => host[value == null ? 'removeAttribute' : 'setAttribute'](name, value as string)

// Attributes
// -------------------------------------

export let withAttributes = <T extends Element>(
	host: T,
	attributes: (
		t.ElementAttributesByName<T['localName']>
	)
): T => {
	for (let attributeName in attributes) {
		toggleAttribute(host, attributeName, attributes[attributeName] as any)
	}

	return host
}

// ARIA
// -------------------------------------

export let withARIA = <T extends Element>(host: T, props: Partial<t.AriaProperties>): T => {
	for (let name in props) {
		if (name === 'focusable') host.setAttribute('tabindex', props[name] ? '0' : '-1')
		else toggleAttribute(host, (name === 'role' ? '' : 'aria-') + name, props[name as keyof typeof props])
	}

	return host
}
