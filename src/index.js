global._babelPolyfill = false
import 'babel-polyfill'

import './normalize.less'
import './index.less'
import App from 'app/components'

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
