const initialState = {
	value: '',
	list: []
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
		return {
			...state,
			value: ''
		}
	}

	case 'LIST_ADD': {
		return {
			...state,
			list: [
				...state.list,
				action.payload
			]
		}
	}

	case 'LIST_REMOVE': {
		return {
			...state,
			list: state.list.filter((item, i) => i !== action.payload)
		}
	}

	default:
		return state
	}
}

export default input
