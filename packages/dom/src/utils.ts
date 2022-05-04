import type * as t from './types'

export let { assign } = Object

/** Returns a function that returns a memoized value from a given key, conditionally initialized by the given setter function. */
export let createRef = <K extends object, V, A extends unknown[]>(
	setFn: (host: K, ...args: A) => V,
	store = new WeakMap<K, V>()
) => (host: K, ...args: A) => (
	store.has(host)
		? store
	: store.set(host, setFn(host, ...args))
).get(host)!

export let noop: t.noop = () => {}

/** Returns a CSS selector matching the given parts. */
export let getTokenSelector = (
	token: string,
	parts: string
) => parts.trim().split(/\s+/).map(part => `[${token}~="${part}"]`).join(',')
