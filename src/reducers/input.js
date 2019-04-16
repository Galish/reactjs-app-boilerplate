const initialState = {
	value: ''
}

const input = (state = initialState, action) => {
	switch (action.type) {
	case 'INPUT_CHANGE': {
		return {
			...state,
			value: action.payload
		}
	}

	case 'INPUT_CLEAR': {
		return initialState
	}

	default:
		return state
	}
}

export default input
