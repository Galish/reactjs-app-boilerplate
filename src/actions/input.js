export default {
	addToList: () => (dispatch, getState) => {
		dispatch({
			payload: getState().input.value,
			type: 'LIST_ADD'
		})
	},

	removeFromList: index => dispatch => {
		dispatch({
			payload: index,
			type: 'LIST_REMOVE'
		})
	},

	changeInput: value => dispatch => {
		dispatch({
			payload: value,
			type: 'INPUT_CHANGE'
		})
	},

	clearInput: () => dispatch => {
		dispatch({type: 'INPUT_CLEAR'})
	}
}
