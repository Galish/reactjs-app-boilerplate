import './menu.css'
import Link from './link'

class Menu extends React.PureComponent {
	static contextTypes = {
		router: PropTypes.object
	}

	render() {
		return (
			<div className="menu">
				<Link to="/">
					Home
				</Link>

				<Link to="/about">
					About
				</Link>
			</div>
		)
	}
}

export default Menu;
