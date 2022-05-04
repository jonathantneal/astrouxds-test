import { range } from './range'

/** Returns the rectangle layout for the given Node. */
export let getRect = (node: Node) => (
	node.isConnected
		? node.parentNode
			? (range.selectNode(node) as undefined) || range.getBoundingClientRect()
		: getViewportRect(
				(node.ownerDocument || (node as Document)).defaultView!
		)
	: new DOMRect(0, 0, 0, 0)
)

let getViewportRect = (viewport: Window) => new DOMRect(
	/** Starting position along the horizontal X axis. */
	0,
	/** Starting position along the vertical Y axis. */
	0,
	/** Viewport width. */
	viewport.innerWidth,
	/** Viewport height. */
	viewport.innerHeight
)
