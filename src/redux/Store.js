import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	userEditProfileReducer,
	userLoginReducer,
	userLogoutReducer,
} from "./Reducer/userReducer";
import { sessionReducer, sessionService } from "redux-react-session";

const userReducer = combineReducers({
	userLogin: userLoginReducer,
	userLogout: userLogoutReducer,
	userEdit: userEditProfileReducer,

	session: sessionReducer,
});



const inistialState = {};

const middleware = [thunk];

const store = createStore(
	userReducer,
	inistialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

sessionService.initSessionService(store);

export default store;
