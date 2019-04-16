import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import actions from 'app/actions'

export default connect(
	state => ({
		input: state.input
	}),
	dispatch => bindActionCreators(
		{
			onClear: actions.input.clear,
			onInput: actions.input.change
		},
		dispatch
	)
)
