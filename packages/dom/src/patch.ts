import type * as t from './types'
import { noop } from './utils'

let roll = (
	host: Node,
	patches: Patch[]
): t.noop => (): void => {
	for (let patch of patches) patch(host)
}

export let compareNode = (
	host: Node,
	diff: Node,
	context: ParentNode = new DocumentFragment()
): t.noop => (
	!host && !diff
		? noop
	: !host
		? (): void => context.append(diff.cloneNode(true))
	: !diff
		? (): void => (host as ChildNode).remove()
	: host.nodeType === diff.nodeType && host.nodeName === diff.nodeName
		? host.nodeType === 1
			? roll(host, [
				compareAttributes(host as Element, diff as Element),
				compareNodes(host.childNodes, diff.childNodes, host as ParentNode),
			])
		: host.nodeValue === diff.nodeValue
			? noop
		: (): void => {
			host.nodeValue = diff.nodeValue
		}
	: (): void => (host as ChildNode).replaceWith(diff)
)

export let compareAttributes = (
	host: Element,
	diff: Element
): t.noop => {
	let patches: t.noop[] = []
	let removed = new Map<string, string>()

	for (let { name, value } of host.attributes) {
		removed.set(name, value)
	}

	for (let { name, value } of diff.attributes) {
		let olden = removed.get(name)

		if (value === olden) {
			removed.delete(name)
		} else if (olden === undefined) {
			removed.delete(name)

			patches.push((): void => host.setAttribute(name, value))
		} else {
			patches.push((): void => host.setAttribute(name, value))
		}
	}

	for (let [ name ] of removed) {
		patches.push((): void => host.removeAttribute(name))
	}

	return roll(host, patches)
}

export let compareNodes = (
	hostNodes: NodeListOf<ChildNode>,
	diffNodes: NodeListOf<ChildNode>,
	context: ParentNode
): t.noop => {
	let patches: t.noop[] = []
	let index = -1
	let count = Math.max(hostNodes.length, diffNodes.length)
	let patch

	while (++index < count) {
		patch = compareNode(hostNodes[index], diffNodes[index], context)

		if (patch !== noop) patches.push(patch)
	}

	return roll(context, patches)
}

type Patch = (host: Node) => void
