export let range = new Range()

export let toRange = (node: Node) => {
	range.selectNode(node)
	return range
}
