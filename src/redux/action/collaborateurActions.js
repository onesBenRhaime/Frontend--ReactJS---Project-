import {
	COLL_ADD_CAND_FAIL,
	COLL_ADD_CAND_REQUEST,
	COLL_GET_CAND_REQUEST,
	COLL_GET_CAND_FAIL,
	COLL_EXPORT_DATA_REQUEST,
	COLL_EXPORT_DATA_FAIL,
	COLL_UP_FILE_REQUEST,
	COLL_UP_FILE_FAIL,
} from "../constant/collaborateurConstant";
import axios from "axios";

//import { sessionService } from "redux-react-session";

/*******************Candidats*****************/

/*Add  */

export const AddCandidat = (data, navigate) => async (dispatch) => {
	const { nom, prenom, email, password, tel, adresse, profil } = data;

	try {
		dispatch({ type: COLL_ADD_CAND_REQUEST });
		await axios
			.post(`http://localhost:3000/api/candidat/addCandidat`, {
				nom,
				prenom,
				email,
				password,
				profil,
				tel,
				adresse,
			})
			.then((response) => {
				const { data } = response;
				console.log(response);
				const { error } = data;
				if (error) {
					dispatch({
						type: COLL_ADD_CAND_FAIL,
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
			type: COLL_ADD_CAND_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/*Upload excel file   */

export const UploadFile = (data, navigate) => async (dispatch) => {
	try {
		dispatch({ type: COLL_UP_FILE_REQUEST });
		await axios
			.post(`http://localhost:3000/api/candidat/export`, {})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: COLL_UP_FILE_FAIL,
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
			type: COLL_UP_FILE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/*ExporterData from excel file and add userdata from excel to bd   */

export const ExportData = (data, navigate) => async (dispatch) => {
	try {
		dispatch({ type: COLL_EXPORT_DATA_REQUEST });
		await axios
			.post(`http://localhost:3000/api/candidat/export`, {})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: COLL_EXPORT_DATA_FAIL,
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
			type: COLL_EXPORT_DATA_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/*Add  */
export const GetOneCandidat = (data, navigate) => async (dispatch) => {
	const { email } = data;

	try {
		dispatch({ type: COLL_GET_CAND_REQUEST });
		await axios
			.get(`http://localhost:3000/api/candidat/findOneCandidat`, {
				email,
			})
			.then((response) => {
				const { data } = response;
				console.log(response);
				const { error } = data;
				if (error) {
					dispatch({
						type: COLL_GET_CAND_FAIL,
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
			type: COLL_GET_CAND_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/*Get ALl   */
export const GetAllCandidat = (data, navigate) => async (dispatch) => {
	try {
		dispatch({ type: COLL_GET_CAND_REQUEST });
		await axios
			.get(`http://localhost:3000/api/candidat/allCandidat`, {})
			.then((response) => {
				const { data } = response;
				console.log("reponse api : " + response);
				const { error } = data;
				if (error) {
					dispatch({
						type: COLL_GET_CAND_FAIL,
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
			type: COLL_GET_CAND_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/*****************test*****************/
