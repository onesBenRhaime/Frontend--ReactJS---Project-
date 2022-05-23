import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_RESET_PASSWORD_REQUEST,
	USER_RESET_PASSWORD_FAIL,
	USER_EDIT_PROFILE_FAIL,
	USER_EDIT_PROFILE_REQUEST,
	USER_LOGIN_SUCCESS,
} from "../constant/userConstant";
import axios from "axios";
import { sessionService } from "redux-react-session";

export const login = (data, navigate) => async (dispatch) => {
	const { email, password } = data;
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		await axios
			.post(`http://localhost:3000/api/user/login`, {
				email,
				password,
			})
			.then((response) => {
				const { data } = response;
				//console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: USER_LOGIN_FAIL,
						payload: error,
					});
				} else {
					const userDATA = data;
					//console.log(userDATA);
					const token = userDATA.token;
					localStorage.setItem("jwt", token);
					sessionService.saveSession(token).then(() => {
						sessionService.saveUser(userDATA).then(() => {
							if (userDATA.user.role.toLowerCase() === "collaborateur") {
								navigate("/dashboard/collaborateur");
							} else if (userDATA.user.role.toLowerCase() === "admin") {
								navigate("/dashboard");
							} else {
								navigate("/");
							}
							dispatch({ type: USER_LOGIN_SUCCESS });
						});
					});
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
	localStorage.removeItem("jwt");
	navigate("/login");
	dispatch({ type: USER_LOGOUT });
};

export const register = (data, navigate) => async (dispatch) => {
	const { nom, prenom, email, password } = data;
	try {
		dispatch({ type: USER_REGISTER_REQUEST });
		await axios
			.post(`http://localhost:3000/api/user/register`, {
				nom,
				prenom,
				email,
				password,
			})
			.then((response) => {
				const { data } = response;
				//	console.log(response);
				const { error } = data;
				if (error) {
					dispatch({
						type: USER_REGISTER_FAIL,
						payload: error,
					});
				} else {
					const userDATA = data;
					console.log(userDATA);
					navigate("/login");
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

export const RestPsw = (data, navigate) => async (dispatch) => {
	const { email } = data;
	try {
		dispatch({ type: USER_RESET_PASSWORD_REQUEST });
		await axios
			.post(`http://localhost:3000/api/user/forgetPssword`, {
				email,
			})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: USER_RESET_PASSWORD_FAIL,
						payload: error,
					});
				} else {
					const userDATA = data;
					console.log(userDATA);
					navigate("/");
				}
			});
	} catch (error) {
		//	console.log(error);
		dispatch({
			type: USER_RESET_PASSWORD_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const EditProfile = (data, navigate) => async (dispatch) => {
	const { email, tel, adresse } = data;
	console.log(tel, " /", adresse);
	console.log("data", data);
	try {
		dispatch({ type: USER_EDIT_PROFILE_REQUEST });
		await axios
			.post(`http://localhost:3000/api/user/editProfile`, {
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
						type: USER_EDIT_PROFILE_FAIL,
						payload: error,
					});

					return alert("error", "Error!", response.data.message);
				} else {
					const userDATA = data;
					console.log("userNewDATA : ", userDATA);

					console.log(userDATA.user.role);
					if (userDATA.user.role === "collaborateur") {
						navigate("/ProfileCollaborateur");
					} else {
						navigate("/ProfileAdmin");
					}
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
