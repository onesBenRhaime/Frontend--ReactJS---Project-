import axios from "axios";
import React, { useState } from "react";
import Menu from "../Sidebar";
import Header from "../Topbar";
export default function InfoQ() {
	const [timer, setTimer] = useState(false);
	const [message, setmessage] = useState("");
	const [isCorrect, setIsCorrect] = useState("");
	const [alternatives, setAlternatives] = useState([]);
	const [question, setQuestion] = useState({
		tag: "",
		titre: "",
		type: "",
		categorie: "",
		niveau: "",
		technologie: "",
		score: "",
		alternatives: [],
	});
	const addQuestion = async (e) => {
		e.preventDefault();

		await axios
			.post(``, {})
			.then((response) => {})
			.catch((err) => {});
	};
	const addOption = () => {
		setAlternatives([
			...alternatives,
			{
				option: alternatives.option,
				isCorrect: alternatives.isCorrect,
			},
		]);
	};
	//add li tab
	const addAlternatives = () => {
		setAlternatives([
			...alternatives,
			{
				option: question.option,
				isCorrect: isCorrect,
			},
		]);
	};
	const delOption = () => {};
	const handleChange = (e) => {
		setQuestion({ ...question, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<div className="row">
						<div className="col-8">
							<h5
								style={{
									color: "#ff7900",
									marginLeft: "50px",
									marginTop: "30px",
								}}
							>
								Les information d'un question
							</h5>
						</div>
					</div>
					<section class="container">
						<div className="card-body">
							<form onSubmit={addQuestion}>
								{/* Input Titre*/}
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
								{/* select domaine && categorie*/}
								<div className="row">
									<div className="col-6">
										<div className="form-group">
											<label>Domaine</label>
											<select
												class="form-select "
												aria-label=".form-select-lg example"
												name="domaine"
												value={question.domaine}
												onChange={handleChange}
											>
												<option selected="selected">Choix </option>
												<option value="developpement web">
													Développement Web{" "}
												</option>
												<option value="developpement mobile">
													Développement Mobile{" "}
												</option>
												<option value="developpement design">Design </option>
											</select>
										</div>{" "}
									</div>
									{/* select categorie*/}
									<div className="col-6">
										<label>Catégories</label>
										<select
											class="form-select "
											aria-label=".form-select-lg example"
											name="categorie"
											value={question.categorie}
											onChange={handleChange}
										>
											<option selected>Choix</option>
											<option value="frontend">Frontend</option>
											<option value="backend">Backend</option>
										</select>
									</div>
								</div>
								{/* Technologies */}
								<div className="row">
									{/* technologie */}
									<div className="col-6">
										<div className="form-group">
											<label>Technologies</label>
											<select
												class="form-select "
												aria-label=".form-select-lg example"
												name="technologie"
												value={question.technologie}
												onChange={handleChange}
											>
												<option selected="selected">Choix</option>
												<option value="html">Html</option>
												<option value="html">css</option>
												<option value="jquery">jQuery </option>
											</select>
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
								{/* score question */}
								<div className="row">
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
												value={alternatives.option}
												onClick={handleChange}
											/>
										</div>
									</div>
									<div className="col-6">
										{" "}
										<br />
										<label> Action </label>
										{/* ajouter option */}
										<div>
											<button className="btn btn-success" onClick={isCorrect}>
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
												<tr>
													<th scope="row">
														<input type="checkbox" />
													</th>
													<td>option 1</td>
													<td>
														<button
															className="btn btn-danger"
															onClick={delOption}
														>
															<i className="fas fa-trash" />
														</button>
													</td>
												</tr>
												<tr>
													<th scope="row">
														<input type="checkbox" />
													</th>
													<td> ooooo</td>
													<td>
														<button
															className="btn btn-danger"
															onClick={delOption}
														>
															<i className="fas fa-trash" />
														</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>{" "}
								</div>
								<hr />
								{/* Ajouter le question ou annuler l'ajout */}
								<div>
									<div className="col-2">
										<button
											type="submit"
											onClick={addQuestion}
											class="btn btn-block  btn-primary btn-lg"
										>
											Modifier
										</button>

										<button
											type="button"
											class="btn btn-block btn-danger btn-lg"
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
