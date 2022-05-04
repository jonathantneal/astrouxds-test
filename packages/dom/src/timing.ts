// Batched Read/Write Operations
// -------------------------------------

let next: Function

let onFrameId = 0

let onFrame = () => {
	onFrameId = requestAnimationFrame(onFrame)

	while (onLayout.size || onEffect.size) {
		for (next of onLayout) next()

		onLayout.clear()

		for (next of onEffect) next()

		onEffect.clear()
	}

	for (next of onEachEffect) next()

	for (next of onEachLayout) next()
}

export let onLayout = new Set<Function>()
export let onEffect = new Set<Function>()
export let onEachEffect = new Set<Function>()
export let onEachLayout = new Set<Function>()

// initialization
// -------------------------------------

let checkVisibilityState = () => {
	cancelAnimationFrame(onFrameId)

	if (document.visibilityState === 'visible') {
		onFrame()
	}
}

let checkReadyState = () => {
	document.removeEventListener('readystatechange', checkReadyState)

	if (document.readyState[7]) {
		document.addEventListener('visibilitychange', checkVisibilityState)

		checkVisibilityState()
	} else {
		document.addEventListener('readystatechange', checkReadyState)
	}
}

checkReadyState()
