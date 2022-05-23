import {
	ADMIN_ADD_COLL_FAIL,
	ADMIN_ADD_COLL_REQUEST,
	ADMIN_ADD_QCM_FAIL,
	ADMIN_DEL_COLL_FAIL,
	ADMIN_DEL_COLL_REQUEST,
	ADMIN_GET_COLL_FAIL,
	ADMIN_GET_COLL_REQUEST,
	ADMIN_GET_QCM_FAIL,
	ADMIN_GET_QCM_REQUEST,
} from "../constant/adminConstant";

export const adminGetCollReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_GET_COLL_REQUEST:
			return { loading: true };

		case ADMIN_GET_COLL_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const adminAddCollReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_ADD_COLL_FAIL:
			return { loading: true };

		case ADMIN_ADD_COLL_REQUEST:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const adminDelCollReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_DEL_COLL_REQUEST:
			return { loading: true };

		case ADMIN_DEL_COLL_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const adminAddQcmReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_DEL_COLL_REQUEST:
			return { loading: true };

		case ADMIN_ADD_QCM_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const adminGetQcmReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_GET_QCM_REQUEST:
			return { loading: true };

		case ADMIN_GET_QCM_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
