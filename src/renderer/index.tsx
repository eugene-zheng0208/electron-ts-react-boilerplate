import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {App} from "./containers/app";
import counterStore from "./stores/store";
var injectTapEventPlugin = require('react-tap-event-plugin');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const appRoot = document.getElementById("app");

render(
	<Provider store={counterStore}>
		<App></App>
	</Provider>,
	appRoot,
);
