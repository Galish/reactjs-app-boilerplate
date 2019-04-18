import {Link} from 'react-router-dom'

import Layout from 'app/components/layout'

class NotFound extends React.PureComponent {
	render() {
		return (
			<Layout>
				<p>Page Not Found</p>

				<Link to="/">
					Home page
				</Link>
			</Layout>
		)
	}
}

export default NotFound
