import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import actions from 'app/actions'

export default connect(
	state => ({
		...state.input
	}),
	dispatch => bindActionCreators(
		{
			onClear: actions.input.clearInput,
			onInput: actions.input.changeInput,
			onAdd: actions.input.addToList,
			onRemove: actions.input.removeFromList
		},
		dispatch
	)
)
