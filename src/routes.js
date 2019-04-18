import {Route, Switch} from 'react-router-dom'

import About from 'app/pages/about'
import Home from 'app/pages/home'
import NotFound from 'app/pages/404'

const routes = (
	<Switch>
		<Route exact
			path="/"
			component={Home}/>

		<Route path="/about"
			component={About}/>

		<Route component={NotFound}/>
	</Switch>
)

export default routes
