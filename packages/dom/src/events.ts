import * as t from './types'

/** Returns the given event target with the given listeners added to it. */
export let withEvents = <T extends EventTarget = EventTarget, Events = {}>(
	host: T,
	listeners: t.ConfigureListeners<Events, T>,
	init?: boolean | AddEventListenerOptions
): T => {
	for (let type in listeners) {
		host.addEventListener(type, listeners[type as keyof typeof listeners] as any, init)
	}

	return host
}

// Document Events
// -------------------------------------

/** Calls the given function if or when the document is loaded. */
export let ready = (callback: () => void): void => {
	function check() {
		document.removeEventListener('readystatechange', check)! || document.readyState[7]
			? callback()
		: document.addEventListener('readystatechange', check)
	}

	check()
}
