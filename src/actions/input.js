export default {
	change: value => dispatch => {
		dispatch({
			payload: value,
			type: 'INPUT_CHANGE'
		})
	},

	clear: () => dispatch => {
		dispatch({type: 'INPUT_CLEAR'})
	}
}
