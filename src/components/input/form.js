import './form.css'

export default class App extends React.PureComponent {
	static propTypes = {
		value: PropTypes.string,
		onAdd: PropTypes.func.isRequired,
		onClear: PropTypes.func.isRequired,
		onInput: PropTypes.func.isRequired
	}

	onInput = ({target}) => this.props.onInput(target.value)

	onSubmit = e => {
		e.preventDefault()

		this.props.onAdd()
		this.props.onClear()
	}

	render() {
		const {value} = this.props

		return (
			<form className="input-form"
				onSubmit={this.onSubmit}>
				<input className="text-input"
					onChange={this.onInput}
					type="text"
					value={value} />

				<i className="icon"
					onClick={this.props.onClear}>
					✕
				</i>
			</form>
		)
	}
}
