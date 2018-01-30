import { render } from "react-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/action";
import { AppComponent } from "../components/app";


function mapStateToProps(state) {
	return { counter: state.counter };
}

function mapDispatchToProps(dispatch) {
	return {
		onClickDecrementButton: () => {
			dispatch(Actions.decrement());
		},
		onClickIncrementButton: () => {
			dispatch(Actions.increment());
		},
	};
}

export const App = connect(
	mapStateToProps,
	mapDispatchToProps,
)(AppComponent);