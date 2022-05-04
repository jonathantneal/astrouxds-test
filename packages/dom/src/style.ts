import { createRef } from './utils'

/** Returns the computed styles for the given element. */
export let getCSS = createRef(
	(host: Element) => getComputedStyle(host)
)

/** Returns the computed styles for the given element. */
export let getCSSOM = createRef(
	(root: Document | ShadowRoot) => (
		(root instanceof Document ? root.head : root).insertBefore(document.createElement('style'), document.head.firstChild).sheet
	)
)

/** Returns the computed CSS value for the given element given property. */
export let getCSSValue = (host: Element, name: string) => getCSS(host).getPropertyValue(name).trim().toLowerCase().replace(
	// replace css attribute functions with their corresponding attribute value
	matchCssAttrFunction,
	(_0, $1, $2, $3) => $1 + (host.getAttribute($2) || '') + $3
).replace(
	// remove css string quotes
	matchCssString,
	(_0, $1, $2, $3) => $1 + (host.getAttribute($2) || '') + $3
)

// internals
// -------------------------------------

/** Matches a CSS `attr()` function. */
let matchCssAttrFunction = /(^|[^\w-])attr\(([\w-]+)\)([^\w-]|$)/

/** Matches a CSS string value (where computed string values only use double quotes). */
let matchCssString = /^"(.+)"$/
