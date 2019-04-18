global._babelPolyfill = false
import 'babel-polyfill'
import './index.css'
import routes from './routes'

import {applyMiddleware, createStore} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from 'app/reducers'

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

const supportsHistory = 'pushState' in window.history

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename="/"
			forceRefresh={!supportsHistory}>
			{routes}
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)
