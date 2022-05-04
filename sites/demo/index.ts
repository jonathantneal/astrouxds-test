import './index.css'

import * as $ from '@astrouxds/dom'
import * as _ from '@astrouxds/components'

customElements.define('rux-any', _.AnyElement)
customElements.define('rux-shadow', _.ShadowElement)
customElements.define('rux-group', _.AriaGroupElement)

$.onLayout.add(() => {
	console.log('onLayout')
})
