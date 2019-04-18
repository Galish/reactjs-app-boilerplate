import Layout from 'app/components/layout'
import InputComponent from 'app/components/input'
import InputController from 'app/controllers/input'

const Input = InputController(InputComponent)

class HomePage extends React.PureComponent {
	render() {
		return (
			<Layout>
				<Input />
				Home
			</Layout>
		)
	}
}

export default HomePage
