import axios from "axios";
import { sessionService } from "redux-react-session";
import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
} from "../constant/userConstant";

export const login = (data, navigate) => async (dispatch) => {
	const { email, password } = data;
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		await axios
			.post(`http://localhost:3000/api/user/candidat/login`, {
				email,
				password,
			})
			.then((response) => {
				const { data } = response;

				const { error } = data;
				if (error) {
					dispatch({
						type: USER_LOGIN_FAIL,
						payload: error,
					});
				} else {
					const userDATA = data;
					const token = userDATA.token;
					sessionService.saveSession(token).then(() => {
						sessionService.saveUser(userDATA).then(() => {
							alert(
								"Welcome " +
									userDATA.candidat.nom +
									"" +
									userDATA.candidat.prenom
							);
							navigate("/candidat");
							console.log("user Connected : ", userDATA);
						});
					});
					dispatch({ type: USER_LOGIN_SUCCESS });
				}
			});
	} catch (error) {
		//	console.log(error);
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getTests = (data, navigate) => async (dispatch) => {
	try {
		// dispatch({ type: USER_LOGIN_REQUEST });
		await axios
			.get(`http://localhost:3000/api/test/getTestByCandidat`, {
				email: data.email,
			})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : ", data);
				const { error } = data;
				if (error) {
					dispatch({
						type: USER_LOGIN_FAIL,
						payload: error,
					});
				} else {
					console.log(data);
					// const userDATA = data;
					// //console.log(userDATA);
					// const token = userDATA.token;
					// sessionService.saveSession(token).then(() => {
					// 	sessionService.saveUser(userDATA).then(() => {
					// 		navigate("/candidat/mesTests");
					// 	});
					// });
				}
			});
	} catch (error) {
		//	console.log(error);
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const logout = (navigate) => async (dispatch) => {
	sessionService.deleteSession();
	sessionService.deleteUser();
	navigate("/candidat");
};
