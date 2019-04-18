import './link.css'

import {NavLink} from 'react-router-dom'

const MenuLink = ({children, ...props}) => (
	<NavLink activeClassName="is-active"
		className="menu-link"
		exact
		strict
		{...props}>
		{children}
	</NavLink>
)

MenuLink.propTypes = {
	children: PropTypes.node
}

export default MenuLink
