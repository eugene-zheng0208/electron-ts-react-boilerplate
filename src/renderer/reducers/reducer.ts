import * as Actions from "../actions/action";

const InitialState = {
	counter: 0,
};

export function reducer(state = InitialState, action) {
	switch(action.type) {
		case Actions.INCREMENT:
			return Object.assign({}, state, {counter: state.counter + action.count});
		case Actions.DECREMENT:
			return Object.assign({}, state, {counter: state.counter - action.count});
		default:
			return state;
	}
}