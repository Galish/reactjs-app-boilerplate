global._babelPolyfill = false
import 'babel-polyfill'
import './index.css'

import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import Component from 'app/components'
import controller from 'app/controllers/app'
import rootReducer from 'app/reducers'


const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

const App = controller(Component)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
