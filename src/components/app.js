import './app.css'

export default class App extends React.PureComponent {
	static propTypes = {
		input: PropTypes.shape({
			value: PropTypes.string
		}).isRequired,
		onClear: PropTypes.func.isRequired,
		onInput: PropTypes.func.isRequired
	}

	onInput = ({target}) => this.props.onInput(target.value)

	renderText = () => {
		const {value} = this.props.input

		if (value) {
			return (
				<div className="text">
					{value}
				</div>
			)
		}

		return null
	}

	render() {
		const {value} = this.props.input

		return (
			<div className="container">
				<input className="text-input"
					onChange={this.onInput}
					type="text"
					value={value} />

				<i className="icon"
					onClick={this.props.onClear}>
					✕
				</i>

				{this.renderText()}
			</div>
		)
	}
}
