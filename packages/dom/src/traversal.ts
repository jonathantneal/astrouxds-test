import { createRef } from './utils'
import { toRange } from './range'

/** Returns the closest ancestor for the given nodes. */
export let getClosestAncestor = (nodeA: Node, nodeB: Node) => {
	if (nodeA === nodeB) return nodeA

	let range = toRange(nodeA)

	range[range.comparePoint(nodeB, 0) < 0 ? 'setStartBefore' : 'setEndAfter'](nodeB)

	return range.commonAncestorContainer as HTMLElement
}

/** Returns the Shadow Root for the given element. */
export let getShadowRoot = createRef(
	(host: Element, init?: ShadowRootInit) => host.attachShadow(init!)
)
