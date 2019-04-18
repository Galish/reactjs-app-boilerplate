global._babelPolyfill = false
import 'babel-polyfill'

import './index.css'
import App from 'app/components'

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
