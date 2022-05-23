import {
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_EDIT_PROFILE_FAIL,
	USER_EDIT_PROFILE_REQUEST,
	USER_DEL_COLL_FAIL,
	ADMIN_ADD_COLL_REQUEST,
	ADMIN_DEL_COLL_FAIL,
	ADMIN_GET_COLL_FAIL,
	ADMIN_GET_COLL_REQUEST,
	ADMIN_SEND_EMAIL_FAIL,
	ADMIN_SEND_EMAIL_REQUEST,
} from "../constant/adminConstant";
import axios from "axios";

//import { sessionService } from "redux-react-session";

/******************* Collaborateur **************** */
/*Add  */
export const AddColl = (data, navigate) => async (dispatch) => {
	const { nom, prenom, email, password, role, tel, adresse } = data;

	try {
		dispatch({ type: USER_REGISTER_FAIL });
		const response = await axios.post(`http://localhost:3000/api/admin/Add`, {
			nom,
			prenom,
			email,
			password,
			role,
			tel,
			adresse,
		});
		const { data } = response;
		//	console.log(response);
		const { error } = data;
		if (error) {
			dispatch({
				type: USER_REGISTER_FAIL,
				payload: error,
			});
		} else {
			console.log(data);
			navigate("/");
		}
	} catch (error) {
		console.log(error);
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
/*delete  One  */

export const DeleteColl = (data, navigate) => async (dispatch) => {
	const { email } = data;
	try {
		dispatch({ type: ADMIN_ADD_COLL_REQUEST });
		await axios
			.delete(`http://localhost:3000/api/admin/deleteUser`, {
				email,
			})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: ADMIN_DEL_COLL_FAIL,
						payload: error,
					});
				} else {
					console.log(data);
					navigate("/");
				}
			});
	} catch (error) {
		//	console.log(error);
		dispatch({
			type: USER_DEL_COLL_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/*Get ALl   */
export const FindAllColl = (data, navigate) => async (dispatch) => {
	const { email, tel, adresse } = data;
	try {
		dispatch({ type: ADMIN_GET_COLL_REQUEST });
		await axios
			.get(`http://localhost:3000/api/admin/findAll`, {
				email,
				tel,
				adresse,
			})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: ADMIN_GET_COLL_FAIL,
						payload: error,
					});
				} else {
					console.log(data);
					navigate("/");
				}
			});
	} catch (error) {
		//	console.log(error);
		dispatch({
			type: ADMIN_GET_COLL_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/*Get One*/
export const FindOneColl = (data, navigate) => async (dispatch) => {
	const { email } = data;
	try {
		dispatch({ type: USER_EDIT_PROFILE_REQUEST });
		await axios
			.post(`http://localhost:3000/api/admin/findOne`, {
				email,
			})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: USER_EDIT_PROFILE_FAIL,
						payload: error,
					});
				} else {
					console.log(data);
					navigate("/");
				}
			});
	} catch (error) {
		//	console.log(error);
		dispatch({
			type: USER_EDIT_PROFILE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/*Send Mail to   collaborateur  */
export const SendMail = (data, navigate) => async (dispatch) => {
	const { email, tel, adresse } = data;
	try {
		dispatch({ type: ADMIN_SEND_EMAIL_REQUEST });
		await axios
			.post(`http://localhost:3000/api/admin/SendMail`, {
				email,
				tel,
				adresse,
			})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: ADMIN_SEND_EMAIL_FAIL,
						payload: error,
					});
				} else {
					console.log(data);
					navigate("/");
				}
			});
	} catch (error) {
		//	console.log(error);
		dispatch({
			type: ADMIN_SEND_EMAIL_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/******************* Questions  **************** */
/*Add  */
export const AddQuestion = (data, navigate) => async (dispatch) => {
	const { tag, titre, type, categorie, niveau, technologie, score } = data;
	const alternatives = [];

	try {
		dispatch({ type: USER_REGISTER_FAIL });
		await axios
			.post(`http://localhost:3000/api/admin/addQuestion`, {
				tag,
				titre,
				type,
				categorie,
				niveau,
				technologie,
				score,
				alternatives,
			})
			.then((response) => {
				const { data } = response;
				//	console.log(response);
				const { error } = data;
				if (error) {
					dispatch({
						type: USER_REGISTER_REQUEST,
						payload: error,
					});
				} else {
					console.log(data);
					navigate("/");
				}
			});
	} catch (error) {
		console.log(error);
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
/*dele*/
