import Menu from 'app/components/menu'

const Layout = ({children}) => (
	<div>
		<Menu />
		{children}
	</div>
)

Layout.propTypes = {
	children: PropTypes.node
}

export default Layout
