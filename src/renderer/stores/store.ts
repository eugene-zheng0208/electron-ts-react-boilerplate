import {createStore} from "redux";
import * as Reducer from "../reducers/reducer";

const counterStore = createStore(Reducer.reducer);

export default counterStore;