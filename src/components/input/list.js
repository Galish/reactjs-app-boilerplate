import './list.css'

export default class App extends React.PureComponent {
	static propTypes = {
		list: PropTypes.array.isRequired,
		onRemove: PropTypes.func.isRequired
	}

	render() {
		const {list} = this.props

		if (!list.length) {
			return null
		}

		return (
			<ul className="list">
				{list.map((item, i) =>
					<li key={i}>
						<span>
							{item}
						</span>
						<i className="icon"
							onClick={this.props.onRemove.bind(this, i)}>
							✕
						</i>
					</li>
				)}
			</ul>
		)
	}
}
