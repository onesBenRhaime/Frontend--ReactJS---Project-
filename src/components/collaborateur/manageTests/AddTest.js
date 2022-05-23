import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

import { Button } from "@mui/material";
import axios from "axios";

export default function TestCandidat() {
	const [questions, setQuestions] = useState([]);
	const [listQ, setListQ] = useState([]);
	const [domaine, setDomaine] = useState([]);
	const [categorie, setCategorie] = useState([]);
	const [listQF, setListQF] = useState([]);
	const [tech, setTech] = useState([]);
	const [listE, setListE] = useState([]);
	const [test, setTest] = useState({
		domaine: "",
		categorie: "",
		technologie: "",
		date: "",
		dure: "",
		questions: [],
		candidat: "",
	});
	console.log("Liste Question : ", listQ);
	/*Get All Tech +Dom + Cat */
	useEffect(() => {
		const getAllDomaine = async () => {
			await axios
				.get(`http://localhost:3000/api/admin/getAllDomaine`, {})
				.then((response) => {
					console.log(response.data);
					setDomaine(response.data);
					getQByDomaine(response.data[0].nom);
					getAllCategorie(response.data[0].nom, response.data);
				})
				.catch((err) => {
					console.log(err.message);
				});
		};

		const getAllCandidat = async () => {
			await axios
				.get(`http://localhost:3000/api/candidat/getEmail`, {})
				.then((response) => {
					console.log("candidat : ", response.data);
					setListE(response.data);
				})
				.catch((err) => {
					console.log(err.message);
				});
		};
		getAllCandidat();
		getAllDomaine();
	}, []);
	const getAllCategorie = async (nom, domaine) => {
		const dom = domaine.find((d) => d.nom === nom);
		console.log(dom);
		if (dom?._id) {
			await axios
				.get(`http://localhost:3000/api/admin/getAllCat?id=${dom._id}`)
				.then((response) => {
					console.log(response.data);
					setCategorie(response.data);
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	};
	const getAllTech = async (e) => {
		const nom = e.target.value;
		const cat = categorie.find((c) => c.nom === nom);
		console.log(cat);
		if (cat?._id) {
			await axios
				.get(`http://localhost:3000/api/admin/getAllTech?id=${cat._id}`)
				.then((response) => {
					console.log(response.data);
					setTech(response.data);
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
		const l = listQ.filter((q) => q.categorie === nom);

		setListQF(l);
	};
	const getQByDomaine = (domaine) => {
		axios
			.get(`http://localhost:3000/api/admin/getQByDomaine`, {
				params: { domaine },
			})
			.then((response) => {
				console.log(response.data);
				setListQ(response.data);
				setListQF(response.data);
				console.log("Liste Question : ", listQ);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	const addTest = async (e) => {
		console.log("adddd");
		e.preventDefault();
		const dateTest = formatDate(test.date);
		await axios
			.post(`http://localhost:3000/api/test/addTestSurMesure`, {
				...test,
				date: dateTest,
				questions,
			})
			.then((response) => {
				console.log(response.data.message);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	const handleChange = (e) => {
		setTest({ ...test, [e.target.name]: e.target.value });
	};

	const updateQ = (item) => {
		const q = questions.find((q, i) => q._id === item._id);
		if (q) {
			const qu = questions.filter((q) => q._id !== item.id);
			setQuestions(qu);
		} else {
			setQuestions([...questions, item]);
		}
	};
	function formatDate(date) {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	}
	return (
		<div>
			<Navbar />
			<SideBar />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<div style={{ marginTop: "20px" }}>
						<div className="row">
							<div className="col-4">
								<h2
									style={{
										color: "#ff7900",
										marginLeft: "10px",
									}}
								>
									Créer un Test sur mesure
								</h2>
							</div>
						</div>{" "}
					</div>
					<section className="content">
						{/* form Test */}
						<div className="card-body">
							<form onSubmit={addTest}>
								<br />
								<div className="row">
									<div className="col-3">
										<div className="form-group">
											<label>Domaine</label>

											<select
												className="form-select"
												name="domaine"
												id="domaine"
												value={test.domaine}
												onChange={(e) => {
													handleChange(e);
													getAllCategorie(e.target.value, domaine);
													getQByDomaine(e.target.value);
												}}
											>
												{domaine.map((item, index) => (
													<option value={item.nom} key={index}>
														{item.nom}
													</option>
												))}
											</select>
										</div>{" "}
									</div>
									{/* select categorie*/}
									<div className="col-3">
										<label>Catégories</label>
										{/* <input
											type="text"
											className="form-control"
											name="categorie"
											value={test.categorie}
											onChange={handleChange}
										/> */}
										<label>Catégories</label>
										{/* <input
											className="form-control"
											list="categorie"
											name="categorie"
											value={test.categorie}
											onChange={(e) => {
												handleChange(e);
												getAllTech(e);
											}}
										/>
										<datalist id="categorie">
											{categorie.map((item, index) => (
												<option value={item.nom} key={index}></option>
											))}
										</datalist> */}
										<select
											className="form-select"
											name="categorie"
											value={test.categorie}
											onChange={(e) => {
												handleChange(e);
												getAllTech(e);
											}}
										>
											<option>NNNN</option>
											{categorie.map((item, index) => (
												<option value={item.nom} key={index}>
													{item.nom}
												</option>
											))}
										</select>
									</div>{" "}
									<div className="col-3">
										<div className="form-group">
											<div className="form-group">
												<label>Technologies</label>

												<select
													className="form-select"
													name="technologie"
													value={test.technologie}
													onChange={(e) => {
														handleChange(e);
														const l = listQF.filter(
															(q) => q.technologie === e.target.value
														);
														setListQF(l);
													}}
												>
													<option>select tech</option>
													{tech.map((item, index) => (
														<option value={item.nom} key={index}>
															{item.nom}
														</option>
													))}
												</select>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									{/*dure*/}
									<div className="col-3">
										<label>Dure</label>
										<input
											type="text"
											className="form-control"
											name="dure"
											value={test.dure}
											onChange={handleChange}
										/>
									</div>
									{/*date*/}
									<div className="col-3">
										<label>Date de Disponibilité </label>
										<input
											type="date"
											className="form-control"
											name="date"
											value={test.date}
											onChange={handleChange}
										/>
									</div>
								</div>
								<br />
								{/* *********  Réponse ******** */}
								<div className="row">
									<label>Alternatives</label>{" "}
								</div>{" "}
								{/* liste Q */}
								<div className="row">
									<div className="col-9">
										<br />
										<h5>Liste des Questions </h5>

										<table className="table table-hover has-checkbox">
											<thead>
												<tr>
													<th></th>
													<th>Titre </th>
													<th>Niveau</th>
													<th>Score</th>
													<th>Alternatives</th>
												</tr>
											</thead>
											<tbody>
												{listQF.map((item, index) => {
													return (
														<tr key={index}>
															<th scope="row">
																<input
																	type="checkbox"
																	onChange={() => updateQ(item)}
																/>
															</th>
															<th>{item.titre} </th>
															<th> {item.niveau}</th>
															<th>{item.score}</th>
															<select name="alt" class="form-select">
																{item.alternatives.map((q, i) => (
																	<option value={q.option} key={index + i}>
																		{q.option}
																	</option>
																))}
															</select>
														</tr>
													);
												})}
											</tbody>
										</table>
									</div>
								</div>
								<hr />
								<br /> <br />
								<div className="row position-relative">
									<div class=" row position-absolute top-100 start-100 translate-middle">
										<div className="col-4">
											<select
												class="form-select"
												name="candidat"
												value={test.candidat}
												onChange={handleChange}
											>
												<option> select Candidat</option>
												{listE.map((item, index) => (
													<option value={item.email} key={index}>
														{item.email}
													</option>
												))}
											</select>
										</div>
										<div className="col-3">
											<Button
												type="submit"
												class="btn btn-primary position-relative"
												data-bs-toggle="modal"
												// href="#exampleModalToggle"
											>
												Envoyer
											</Button>
										</div>
									</div>{" "}
								</div>
							</form>{" "}
							<br />
							<br />
						</div>
					</section>
				</div>

				{/* /Models Delete  */}

				<div
					class="modal fade"
					id="exampleModalToggle"
					aria-hidden="true"
					aria-labelledby="exampleModalToggleLabe"
					tabindex="-1"
				>
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="btn-close" data-bs-dismiss="modal">
									<span class="visually-hidden">Close</span>
								</button>
							</div>
							<div class="modal-body">
								<span class="icon-success">
									<span class="visually-hidden">Success</span>
								</span>
								<h3 style={{ textAlign: "center", margin: "1rem" }}>
									le Test créer et Envoyer aux Candidat avec succès
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
