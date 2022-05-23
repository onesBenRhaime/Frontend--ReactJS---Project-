import {
	USER_EDIT_PROFILE_FAIL,
	USER_EDIT_PROFILE_REQUEST,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
} from "../constant/userConstant";

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };

		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload };

		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		case USER_LOGIN_SUCCESS:
			return { loading: false };
		case USER_LOGOUT:
			return { loading: false };

		default:
			return state;
	}
};

export const userLogoutReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGOUT:
			return {};

		default:
			return state;
	}
};

export const userEditProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_EDIT_PROFILE_REQUEST:
			return { loading: true };

		case USER_EDIT_PROFILE_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
