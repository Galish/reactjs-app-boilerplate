import './input.css'
import Form from './form'
import List from './list'

export default class App extends React.PureComponent {
	static propTypes = {
		value: PropTypes.string,
		list: PropTypes.array.isRequired,
		onAdd: PropTypes.func.isRequired,
		onClear: PropTypes.func.isRequired,
		onInput: PropTypes.func.isRequired,
		onRemove: PropTypes.func.isRequired
	}

	render() {
		return (
			<div className="panel">
				<Form {...this.props} />
				<List {...this.props} />
			</div>
		)
	}
}
