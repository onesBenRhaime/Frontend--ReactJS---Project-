import React from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

import { Button } from "@mui/material";

export default function TestCandidat() {
	return (
		<div>
			<Navbar />
			<SideBar />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<section className="content">
						<div style={{ marginTop: "20px" }}>
							<div className="row">
								<div className="col-8">
									<h2
										style={{
											color: "#0099CC",
											marginLeft: "10px",
										}}
									>
										Créer un Test sur mesure
									</h2>
								</div>
							</div>
						</div>
						<div className="card-body">
							<form>
								{/* Input Titre*/}
								<div className="form-group">
									<label>Titre du question</label>
									<input
										className="form-control"
										type="text"
										name="titre"
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
											value=""
											onChange=""
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
											/>
										</div>
									</div>
									<div className="col-6">
										{" "}
										<br />
										<label> Action </label>
										{/* ajouter option */}
										<div>
											<button className="btn btn-success">
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
														<button className="btn btn-danger" onClick="">
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
														<button className="btn btn-danger" onClick="">
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
											onClick=""
											class="btn btn-block  btn-primary btn-lg"
										>
											Ajouter
										</button>

										<button
											type="button"
											class="btn btn-block btn-danger btn-lg"
											onClick=""
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
