import axios from "axios";
import React, { useState } from "react";

import SideBar from "../Sidebar";
import Navbar from "../Topbar";

export default function AddSession() {
	const [file, setFile] = useState();
	const [fileName, setFileName] = useState("");

	const saveFile = (e) => {
		setFile(e.target.files[0]);
		console.log(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};
	const [session, setSession] = useState({
		nom: "",
		type: "",
		dateD: "",
		dateF: "",
		responsable: "",
		path: "",
	});
	const { nom, type, dateD, dateF, responsable } = session;
	const handleChange = (e) => {
		setSession({ ...session, [e.target.name]: e.target.value });
	};
	const formatDate = (date) => {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	};
	const addSession = async () => {
		const formData = new FormData();
		const dated = formatDate(dateD);
		const datef = formatDate(dateF);
		formData.append("file", file);
		formData.append("fileName", fileName);
		formData.append("nom", nom);
		formData.append("type", type);
		formData.append("dateD", dated);
		formData.append("dateF", datef);
		formData.append("responsable", responsable);

		await axios
			.post(`http://localhost:3000/api/admin/addSession`, formData)
			.then((response) => {
				console.log(response);
				console.log("session ajouter ");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	return (
		<div>
			<Navbar />
			<SideBar />
			<div className="wrapper card">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<div style={{ marginTop: "20px" }}>
						<div className="row">
							<div className="col-6">
								<h3
									style={{
										color: "#ff7900",
										marginLeft: "10px",
									}}
								>
									Création d'une Nouvelle Session de Recrutement
								</h3>
							</div>
						</div>{" "}
					</div>
					<section class="container">
						{/* /.card-header */}
						<div className="card-body" style={{ marginTop: "2rem" }}>
							<form>
								<div className="row">
									<div className="col-6">
										<div className="form-group">
											<label>Nom Session </label>
											<input
												type="text"
												name="nom"
												className="form-control"
												value={nom}
												onChange={handleChange}
												required
											/>
										</div>{" "}
									</div>
									<div className="col-6">
										<div className="form-group">
											<label>Type</label>
											<select
												class="form-select "
												aria-label=".form-select-lg example"
												name="type"
												onChange={handleChange}
											>
												<option selected>Choix</option>
												<option value="Stage de fin d'étude">
													Stage de fin d'étude
												</option>
												<option value="stage d'été">Stage d'été</option>
												<option value="Formations">Formations </option>
												<option value="evenements">Évènements</option>
											</select>
											{/* <input
													type="text"
													name="type"
													value={type}
													className="form-control"
													onChange={handleChange}
													required
												/> */}
										</div>{" "}
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<div className="form-group">
											<label>Date Début </label>
											<input
												type="date"
												name="dateD"
												className="form-control"
												value={dateD}
												onChange={handleChange}
												required
											/>
										</div>{" "}
									</div>
									<div className="col-6">
										<div className="form-group">
											<label>Date Fin</label>
											<input
												type="date"
												name="dateF"
												className="form-control"
												value={dateF}
												onChange={handleChange}
												required
											/>
										</div>{" "}
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<div className="form-group">
											<label>Responsable</label>
											<input
												type="email"
												name="responsable"
												className="form-control"
												value={responsable}
												onChange={handleChange}
												required
											/>
										</div>{" "}
									</div>
									<div className="col-6">
										<div className="form-group">
											<label>Fichier </label>
											<input
												type="file"
												name="file"
												className="form-control"
												onChange={saveFile}
												required
											/>
										</div>{" "}
									</div>
								</div>
								<hr />
								<br />
								{/* Button  */}
								<div className="row justify-content-end">
									<div className="col-2">
										<button
											type="button"
											class="btn btn-block  btn-primary btn-lg"
											onClick={addSession}
										>
											Ajouter
										</button>
									</div>
									<div className="col-2">
										<button
											type="reset"
											class="btn btn-block btn-danger btn-lg"
										>
											Annuler
										</button>
									</div>
								</div>
								<br />
								<br />
							</form>{" "}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
