// global
// -------------------------------------

export type anystring = string & empty

export type empty = Record<never, never>

export type primitive = bigint | boolean | null | number | string | symbol | undefined

export type noop = () => void

// utility
// -------------------------------------

export type PickByValue<T, ValueType> = Pick<T, { [Key in keyof T]-?: T[Key] extends ValueType ? Key : never }[keyof T]>

// DOM
// -------------------------------------

export type Children = Element | Text | primitive

// ARIA
// -------------------------------------

export interface AriaProperties {
	role: AriaRole
	focusable: boolean | null
	atomic: boolean | 'true' | 'false' | null
	autoComplete: 'none' | 'inline' | 'list' | 'both' | null
	busy: boolean | 'true' | 'false' | null
	checked: boolean | 'true' | 'false' | 'mixed' | null
	colCount: number | `${number}` | null
	colIndex: number | `${number}` | null
	colSpan: number | `${number}` | null
	current: boolean | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time' | null
	disabled: boolean | 'true' | 'false' | null
	expanded: boolean | 'true' | 'false' | null
	hasPopup: boolean | 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | null
	hidden: boolean | 'true' | 'false' | null
	keyShortcuts: string | null
	label: string | null
	level: number | `${number}` | null
	live: 'assertive' | 'off' | 'polite' | null
	modal: string | null
	multiLine: boolean | 'true' | 'false' | null
	multiSelectable: boolean | 'true' | 'false' | null
	orientation: 'horizontal' | 'vertical' | null
	placeholder: string | null
	posInSet: number | `${number}` | null
	pressed: boolean | 'true' | 'false' | 'mixed' | null
	readOnly: boolean | 'true' | 'false' | null
	required: boolean | 'true' | 'false' | null
	roleDescription: string | null
	rowCount: number | `${number}` | null
	rowIndex: number | `${number}` | null
	rowSpan: number | `${number}` | null
	selected: boolean | 'true' | 'false' | null
	setSize: number | `${number}` | null
	sort: 'ascending' | 'descending' | 'none' | 'other' | null
	valueMax: number | `${number}` | null
	valueMin: number | `${number}` | null
	valueNow: number | `${number}` | null
	valueText: string | null
}

// Attribute
// -------------------------------------

export type HTMLGlobalAttributes = Partial<Record<'accesskey' | 'autocapitalize' | 'autofocus' | 'class' | 'contenteditable' | 'dir' | 'draggable' | 'enterkeyhint' | 'hidden' | 'id' | 'inputmode' | 'is' | 'itemid' | 'itemprop' | 'itemref' | 'itemscope' | 'itemtype' | 'lang' | 'nonce' | 'slot' | 'spellcheck' | 'style' | 'tabindex' | 'title' | 'translate', primitive>>

export interface HTMLKnownAttributeNamesByName {
	'a': 'charset' | 'coords' | 'download' | 'href' | 'hreflang' | 'name' | 'ping' | 'referrerpolicy' | 'rel' | 'rev' | 'shape' | 'target' | 'type'
	'applet': 'align' | 'alt' | 'archive' | 'code' | 'codebase' | 'height' | 'hspace' | 'name' | 'object' | 'vspace' | 'width'
	'area': 'alt' | 'coords' | 'download' | 'href' | 'hreflang' | 'nohref' | 'ping' | 'referrerpolicy' | 'rel' | 'shape' | 'target' | 'type'
	'audio': 'autoplay' | 'controls' | 'crossorigin' | 'loop' | 'muted' | 'preload' | 'src'
	'base': 'href' | 'target'
	'basefont': 'color' | 'face' | 'size'
	'blockquote': 'cite'
	'body': 'alink' | 'background' | 'bgcolor' | 'link' | 'text' | 'vlink'
	'br': 'clear'
	'button': 'disabled' | 'form' | 'formaction' | 'formenctype' | 'formmethod' | 'formnovalidate' | 'formtarget' | 'name' | 'type' | 'value'
	'canvas': 'height' | 'width'
	'caption': 'align'
	'col': 'align' | 'char' | 'charoff' | 'span' | 'valign' | 'width'
	'colgroup': 'align' | 'char' | 'charoff' | 'span' | 'valign' | 'width'
	'data': 'value'
	'del': 'cite' | 'datetime'
	'details': 'open'
	'dialog': 'open'
	'dir': 'compact'
	'div': 'align'
	'dl': 'compact'
	'embed': 'height' | 'src' | 'type' | 'width'
	'fieldset': 'disabled' | 'form' | 'name'
	'font': 'color' | 'face' | 'size'
	'form': 'accept' | 'accept-charset' | 'action' | 'autocomplete' | 'enctype' | 'method' | 'name' | 'novalidate' | 'target'
	'frame': 'frameborder' | 'longdesc' | 'marginheight' | 'marginwidth' | 'name' | 'noresize' | 'scrolling' | 'src'
	'frameset': 'cols' | 'rows'
	'h1': 'align'
	'h2': 'align'
	'h3': 'align'
	'h4': 'align'
	'h5': 'align'
	'h6': 'align'
	'head': 'profile'
	'hr': 'align' | 'noshade' | 'size' | 'width'
	'html': 'manifest' | 'version'
	'iframe': 'align' | 'allow' | 'allowfullscreen' | 'allowpaymentrequest' | 'allowusermedia' | 'frameborder' | 'height' | 'loading' | 'longdesc' | 'marginheight' | 'marginwidth' | 'name' | 'referrerpolicy' | 'sandbox' | 'scrolling' | 'src' | 'srcdoc' | 'width'
	'img': 'align' | 'alt' | 'border' | 'crossorigin' | 'decoding' | 'height' | 'hspace' | 'ismap' | 'loading' | 'longdesc' | 'name' | 'referrerpolicy' | 'sizes' | 'src' | 'srcset' | 'usemap' | 'vspace' | 'width'
	'input': 'accept' | 'align' | 'alt' | 'autocomplete' | 'checked' | 'dirname' | 'disabled' | 'form' | 'formaction' | 'formenctype' | 'formmethod' | 'formnovalidate' | 'formtarget' | 'height' | 'ismap' | 'list' | 'max' | 'maxlength' | 'min' | 'minlength' | 'multiple' | 'name' | 'pattern' | 'placeholder' | 'readonly' | 'required' | 'size' | 'src' | 'step' | 'type' | 'usemap' | 'value' | 'width'
	'ins': 'cite' | 'datetime'
	'isindex': 'prompt'
	'label': 'for' | 'form'
	'legend': 'align'
	'li': 'type' | 'value'
	'link': 'as' | 'charset' | 'color' | 'crossorigin' | 'disabled' | 'href' | 'hreflang' | 'imagesizes' | 'imagesrcset' | 'integrity' | 'media' | 'referrerpolicy' | 'rel' | 'rev' | 'sizes' | 'target' | 'type'
	'map': 'name'
	'menu': 'compact'
	'meta': 'charset' | 'content' | 'http-equiv' | 'media' | 'name' | 'scheme'
	'meter': 'high' | 'low' | 'max' | 'min' | 'optimum' | 'value'
	'object': 'align' | 'archive' | 'border' | 'classid' | 'codebase' | 'codetype' | 'data' | 'declare' | 'form' | 'height' | 'hspace' | 'name' | 'standby' | 'type' | 'typemustmatch' | 'usemap' | 'vspace' | 'width'
	'ol': 'compact' | 'reversed' | 'start' | 'type'
	'optgroup': 'disabled' | 'label'
	'option': 'disabled' | 'label' | 'selected' | 'value'
	'output': 'for' | 'form' | 'name'
	'p': 'align'
	'param': 'name' | 'type' | 'value' | 'valuetype'
	'pre': 'width'
	'progress': 'max' | 'value'
	'q': 'cite'
	'script': 'async' | 'charset' | 'crossorigin' | 'defer' | 'integrity' | 'language' | 'nomodule' | 'referrerpolicy' | 'src' | 'type'
	'select': 'autocomplete' | 'disabled' | 'form' | 'multiple' | 'name' | 'required' | 'size'
	'slot': 'name'
	'source': 'height' | 'media' | 'sizes' | 'src' | 'srcset' | 'type' | 'width'
	'style': 'media' | 'type'
	'table': 'align' | 'bgcolor' | 'border' | 'cellpadding' | 'cellspacing' | 'frame' | 'rules' | 'summary' | 'width'
	'tbody': 'align' | 'char' | 'charoff' | 'valign'
	'td': 'abbr' | 'align' | 'axis' | 'bgcolor' | 'char' | 'charoff' | 'colspan' | 'headers' | 'height' | 'nowrap' | 'rowspan' | 'scope' | 'valign' | 'width'
	'textarea': 'autocomplete' | 'cols' | 'dirname' | 'disabled' | 'form' | 'maxlength' | 'minlength' | 'name' | 'placeholder' | 'readonly' | 'required' | 'rows' | 'wrap'
	'tfoot': 'align' | 'char' | 'charoff' | 'valign'
	'th': 'abbr' | 'align' | 'axis' | 'bgcolor' | 'char' | 'charoff' | 'colspan' | 'headers' | 'height' | 'nowrap' | 'rowspan' | 'scope' | 'valign' | 'width'
	'thead': 'align' | 'char' | 'charoff' | 'valign'
	'time': 'datetime'
	'tr': 'align' | 'bgcolor' | 'char' | 'charoff' | 'valign'
	'track': 'default' | 'kind' | 'label' | 'src' | 'srclang'
	'ul': 'compact' | 'type'
	'video': 'autoplay' | 'controls' | 'crossorigin' | 'height' | 'loop' | 'muted' | 'playsinline' | 'poster' | 'preload' | 'src' | 'width'
}

export type HTMLKnownAttributesType<T extends string> = T extends keyof HTMLKnownAttributeNamesByName ? Partial<Record<HTMLKnownAttributeNamesByName[T], primitive>> : unknown

export type ElementAttributesByName<T extends string> = (
	& HTMLGlobalAttributes
	& HTMLKnownAttributesType<T>
	& Partial<Record<'role', AriaRole>>
	& Record<string, primitive>
)

export type ElementAttributesByClass<T extends Element> = Record<
	string & HTMLKnownAttributesType<T['localName']>,
	primitive
>

export type HTMLElementType<T extends string> = (
	& HTMLElement
	& { localName: T }
	& (T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : never)
)

export type HTMLElementNameByClass<T> = PickByValue<HTMLElementTagNameMap, T>

export type AriaRole =
	| 'alert'
	| 'alertdialog'
	| 'application'
	| 'article'
	| 'banner'
	| 'button'
	| 'cell'
	| 'checkbox'
	| 'columnheader'
	| 'combobox'
	| 'complementary'
	| 'contentinfo'
	| 'definition'
	| 'dialog'
	| 'directory'
	| 'document'
	| 'feed'
	| 'figure'
	| 'form'
	| 'grid'
	| 'gridcell'
	| 'group'
	| 'heading'
	| 'img'
	| 'link'
	| 'list'
	| 'listbox'
	| 'listitem'
	| 'log'
	| 'main'
	| 'marquee'
	| 'math'
	| 'menu'
	| 'menubar'
	| 'menuitem'
	| 'menuitemcheckbox'
	| 'menuitemradio'
	| 'navigation'
	| 'none'
	| 'note'
	| 'option'
	| 'presentation'
	| 'progressbar'
	| 'radio'
	| 'radiogroup'
	| 'region'
	| 'row'
	| 'rowgroup'
	| 'rowheader'
	| 'scrollbar'
	| 'search'
	| 'searchbox'
	| 'separator'
	| 'slider'
	| 'spinbutton'
	| 'status'
	| 'switch'
	| 'tab'
	| 'table'
	| 'tablist'
	| 'tabpanel'
	| 'term'
	| 'textbox'
	| 'timer'
	| 'toolbar'
	| 'tooltip'
	| 'tree'
	| 'treegrid'
	| 'treeitem'
	| anystring

export type GlobalEvent = globalThis.Event

export type Event<T = GlobalEvent, P extends object = {}> = T & (
	{
		[k in keyof T & keyof P]: (
			k extends keyof P
				? P[k]
			: T[k]
		)
	}
)

export type ConfigureListeners<Events = {}, T = EventTarget> = {
	[K in keyof Events]: (
		Events[K] extends (event: infer E) => void
			? (event: E) => void
		: K extends keyof HTMLElementEventMap
			? (event: Event<HTMLElementEventMap[K], { type: K, currentTarget: T }>) => void
		: (event: never) => void
	)
}
