import {BrowserRouter} from 'react-router-dom'

import './index.css'
import routes from './routes'

const supportsHistory = 'pushState' in window.history

ReactDOM.render(
	<BrowserRouter basename="/"
		forceRefresh={!supportsHistory}>
		{routes}
	</BrowserRouter>,
	document.getElementById('app')
)
