import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../Sidebar";
import Header from "../Topbar";

export default function AddQ() {
	const [isCorrect, setIsCorrect] = useState(false);
	const [option, setOption] = useState("");
	const [alternatives, setAlternatives] = useState([]);
	const [domaine, setDomaine] = useState([]);
	const [categorie, setCategorie] = useState([]);
	const [tech, setTech] = useState([]);
	const [question, setQuestion] = useState({
		titre: "",
		domaine: "",
		technologie: "",
		categorie: "",
		niveau: "",
		score: "",
		alternatives: [],
	});

	const handleChange = (e) => {
		setQuestion({ ...question, [e.target.name]: e.target.value });
	};
	const handleChangeIsCorrect = (id) => {
		const v = alternatives.map((a, index) => {
			if (index === id) return { ...a, isCorrect: true };
			else return { ...a, isCorrect: false };
		});
		setAlternatives(v);
		console.log("v", v);
	};

	const addAlternatives = () => {
		if (option) {
			setOption("");
			setIsCorrect();
			setAlternatives([
				...alternatives,
				{
					option,
					isCorrect: false,
				},
			]);
			console.log(alternatives);
			console.log([
				...alternatives,
				{
					option,
					isCorrect: false,
				},
			]);
		}
	};
	const delOption = (id) => {
		const v = alternatives.filter((a, index) => index !== id);
		setAlternatives(v);
		console.log("v", v);
	};
	const resetFields = () => {
		setQuestion("");
	};
	/*Get All Tech +Dom + Cat */
	useEffect(() => {
		const getAllDomaine = async () => {
			await axios
				.get(`http://localhost:3000/api/admin/getAllDomaine`, {})
				.then((response) => {
					console.log(response.data);
					setDomaine(response.data);
				})
				.catch((err) => {
					console.log(err.message);
				});
		};

		getAllDomaine();
	}, []);
	const getAllCategorie = async (e) => {
		const nom = e.target.value;
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
	};

	const addQuestion = async (e) => {
		e.preventDefault();

		await axios
			.post(`http://localhost:3000/api/admin/addQuestion`, {
				...question,
				alternatives,
			})
			.then((response) => {
				console.log(response.data.question);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper card">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<div style={{ marginTop: "20px" }}>
						<div className="row">
							<div className="col-4">
								<h3
									style={{
										color: "#ff7900",
										marginLeft: "10px",
									}}
								>
									Ajouter une question
								</h3>
							</div>
						</div>{" "}
					</div>
					<section class="container">
						<div className="card-body">
							<form onSubmit={addQuestion}>
								{/* titre Score */}
								<div className="row">
									{" "}
									{/* Input Titre*/}
									<div className="col-6">
										<div className=" form-group">
											<label>Titre du question</label>
											<input
												className="form-control"
												type="text"
												name="titre"
												value={question.titre}
												onChange={handleChange}
												placeholder="Enter le titre du question "
											/>
										</div>
									</div>{" "}
									{/* score question */}
									<div className="col-6">
										<div className="form-group">
											<label>Score</label>
											<select
												class="form-select "
												aria-label=".form-select-lg example"
												name="score"
												value={question.score}
												onChange={handleChange}
											>
												<option>Choix</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
											</select>
										</div>
									</div>
								</div>{" "}
								{/* select domaine && categorie*/}
								<div className="row">
									<div className="col-6">
										<div className="form-group">
											<label>Domaine</label>
											<input
												className="form-control"
												list="domaine"
												name="domaine"
												value={question.domaine}
												onChange={(e) => {
													handleChange(e);
													getAllCategorie(e);
												}}
											/>

											<datalist id="domaine">
												{domaine.map((item, index) => (
													<option value={item.nom} key={index}></option>
												))}
											</datalist>
										</div>{" "}
									</div>
									{/* select categorie*/}
									<div className="col-6">
										<label>Catégories</label>
										<input
											className="form-control"
											list="categorie"
											name="categorie"
											value={question.categorie}
											onChange={(e) => {
												handleChange(e);
												getAllTech(e);
											}}
										/>
										<datalist id="categorie">
											{categorie.map((item, index) => (
												<option value={item.nom} key={index}></option>
											))}
										</datalist>
									</div>
								</div>
								{/* Technologies */}
								<div className="row">
									{/* technologie */}
									<div className="col-6">
										<div className="form-group">
											<label>Technologies</label>
											<input
												className="form-control"
												list="tech"
												name="technologie"
												value={question.technologie}
												onChange={handleChange}
											/>
											<datalist id="tech">
												{tech.map((item, index) => (
													<option value={item.nom} key={index}></option>
												))}
											</datalist>
										</div>
									</div>
									{/* niveau */}
									<div className="col-6">
										<label>Niveau</label>
										<select
											class="form-select "
											aria-label=".form-select-lg example"
											name="niveau"
											value={question.niveau}
											onChange={handleChange}
										>
											<option selected="selected">Choix</option>
											<option value="debutant">Débutant</option>
											<option value="moyenne">Moyenne</option>
											<option value="avancer">Avancé</option>
										</select>
									</div>
								</div>
								{/* *********  Réponse ******** */}
								<div className="row">
									<label>Alternatives</label>{" "}
								</div>{" "}
								{/* Add  option */}
								<div className="row">
									<div className="col-6">
										<br />
										<label>Option</label>
										<div className="input-group">
											{/* input option */}
											<input
												type="text"
												className="form-control"
												name="option"
												value={option}
												onChange={(e) => setOption(e.target.value)}
											/>
										</div>
									</div>
									<div className="col-6">
										{" "}
										<br />
										<label> Ajouter à la liste des options </label>
										{/* ajouter option */}
										<div>
											<button
												className="btn btn-success"
												onClick={addAlternatives}
												type="button"
											>
												<i class="fas fa-check" />{" "}
											</button>
										</div>
									</div>
								</div>
								{/* liste Option */}
								<div className="row">
									<div className="col-6">
										<br />
										<h5>Liste des Options </h5>
										<table className="table table-hover has-checkbox">
											<tbody>
												{alternatives.map((item, index) => {
													return (
														<tr key={index}>
															<th scope="row">
																<input
																	type="radio"
																	value={isCorrect}
																	onChange={() => handleChangeIsCorrect(index)}
																	name="alter"
																	id={index + "alter"}
																/>
															</th>
															<td>
																<label htmlFor={index + "alter"}>
																	{item.option}
																</label>
															</td>
															<td>
																<button
																	className="btn btn-danger"
																	type="button"
																	onClick={() => delOption(index)}
																>
																	<i className="fas fa-trash" />
																</button>
															</td>
														</tr>
													);
												})}
											</tbody>
										</table>
									</div>{" "}
								</div>
								<hr />
								{/* Ajouter le question ou annuler l'ajout */}
								<div className="row justify-content-end">
									<div className="col-3">
										<button type="submit" class="btn btn-block  btn-primary ">
											Ajouter
										</button>
									</div>
									<div className="col-3">
										<button
											type="reset"
											onClick={resetFields}
											class="btn btn-block btn-danger"
										>
											Annuler
										</button>
									</div>
								</div>
							</form>{" "}
							<br />
							<br />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
