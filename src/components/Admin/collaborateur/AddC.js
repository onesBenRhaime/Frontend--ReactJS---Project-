import React, { useState } from "react";
import Header from "../Topbar";
import Menu from "../Sidebar";
import axios from "axios";

export default function AddC() {
	const [timer, setTimer] = useState(false);
	const [coll, setColl] = useState({
		nom: "",
		prenom: "",
		tel: "",
		email: "",
		adresse: "",
		profile: "",
	});
	const [message, setmessage] = useState("");
	const { nom, prenom, tel, email, adresse, profile } = coll;
	const handleChange = (e) => {
		setColl({ ...coll, [e.target.name]: e.target.value });
	};
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const addColl = async (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setmessage("Email n'est pas valide");
			setTimer(true);
			setTimeout(() => {
				setTimer(false);
			}, 3000);
		} else {
			await axios
				.post(`http://localhost:3000/api/admin/Add`, {
					nom,
					prenom,
					tel,
					adresse,
					email,
					profile,
				})
				.then((response) => {
					setmessage(response.data.msg);
					setTimer(true);
					console.log(response.data.msg);
					setTimeout(() => {
						setTimer(false);
					}, 3000);
				})
				.catch((err) => {
					console.log(err.message);
					setmessage(err.message);
					setTimer(true);
					setTimeout(() => {
						setTimer(false);
					}, 3000);
				});
		}
	};
	const resetFields = () => {
		setColl("");
	};
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper card">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<div style={{ marginTop: "20px" }}>
						<div className="col-6">
							<h3
								style={{
									color: "#ff7900",
									marginLeft: "10px",
								}}
							>
								Ajouter Un Collaborateur Orange
							</h3>
						</div>
					</div>
					<section class="container">
						{message && timer && (
							<div class="alert alert-secondary" role="alert">
								{message}
							</div>
						)}

						<div className="card-body">
							<form onSubmit={addColl}>
								<div className="row">
									<div className="col-6">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Nom</label>
											<input
												className="form-control"
												type="text"
												name="nom"
												value={nom}
												onChange={handleChange}
												required
											/>
										</div>{" "}
									</div>
									<div className="col-6">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Prénom</label>
											<input
												className="form-control"
												type="text"
												name="prenom"
												value={prenom}
												onChange={handleChange}
												required
											/>
										</div>{" "}
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">
												Numéro de Télèphone
											</label>
											<input
												className="form-control"
												type="text"
												name="tel"
												value={tel}
												onChange={handleChange}
												required
											/>
										</div>{" "}
									</div>
									<div className="col-6">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Adresse</label>
											<input
												className="form-control"
												type="text"
												name="adresse"
												value={adresse}
												onChange={handleChange}
												required
											/>
										</div>{" "}
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Profile</label>
											<input
												className="form-control"
												type="text"
												name="profile"
												value={profile}
												onChange={handleChange}
												required
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">E-mail</label>
											<input
												className="form-control"
												type="email"
												name="email"
												value={email}
												onChange={handleChange}
												required
												// validators={["required", "isEmail"]}
											/>
										</div>
									</div>
								</div>

								<hr />
								<br />
								{/* Button  */}
								<div className="row justify-content-end">
									<div className="col-2">
										<button type="submit" class="btn btn-block  btn-primary ">
											Ajouter
										</button>
									</div>
									<div className="col-2">
										<button
											type="reset"
											onClick={resetFields}
											class="btn btn-block btn-danger"
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
