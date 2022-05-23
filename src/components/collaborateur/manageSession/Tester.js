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
						<div className="row">
							<div className="col-10">
								<h2
									style={{
										color: "#0099CC",
										marginLeft: "10px",
										marginTop: "20px",
									}}
								>
									Créer un Test au Candidatures
								</h2>
							</div>
							<div className="col-2">
								<div
									style={{
										marginLeft: "2rem",
										marginTop: "30px",
										paddingBlock: "1rem",
									}}
								>
									<Button
										type="submit"
										class="btn btn-primary position-relative"
										data-bs-toggle="modal"
										href="#exampleModalToggle"
									>
										Envoyer les Test
									</Button>
								</div>
							</div>
						</div>

						<div
							style={{
								margin: "30px",
							}}
						>
							<div>
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item" role="presentation">
										<button
											className="nav-link active"
											id="home-tab"
											data-bs-toggle="tab"
											data-bs-target="#home"
											type="button"
											role="tab"
											aria-controls="home"
											aria-selected="true"
										>
											Développement Web
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link"
											id="profile-tab"
											data-bs-toggle="tab"
											data-bs-target="#profile"
											type="button"
											role="tab"
											aria-controls="profile"
											aria-selected="false"
										>
											Développement Mobile
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link"
											id="contact-tab"
											data-bs-toggle="tab"
											data-bs-target="#contact"
											type="button"
											role="tab"
											aria-controls="contact"
											aria-selected="false"
										>
											Design
										</button>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent">
									<div
										className="tab-pane fade show active"
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab"
									>
										{/*Contenue  */}
										<div className="row">
											<div className="col-4">
												<label
													for="validationCustom01"
													class="form-label is-required"
												>
													Catégories
												</label>
												<select
													class="form-select "
													aria-label=".form-select-lg example"
												>
													<option selected disabled value>
														Choose...
													</option>
													<option value="1">FrontEnd</option>
													<option value="2">Backend</option>
												</select>
											</div>
											<div className="col-4">
												<label
													for="validationCustom01"
													class="form-label is-required"
												>
													Technologies
												</label>
												<select
													class="form-select "
													aria-label=".form-select-lg example"
												>
													<option selected disabled value>
														Choose...
													</option>
													<option value="1">HTML</option>
													<option value="2">CSS</option>
													<option value="1">JQUERY</option>
													<option value="2">BOOTSTRAP</option>
												</select>
											</div>
										</div>
										<div className="row">
											<div className="col-5">
												<br />
												<h5>Liste Technologie Ajouter</h5>
												<table className="table table-hover has-checkbox">
													<tbody>
														<tr>
															<th scope="row">
																<div className="custom-control custom-checkbox">
																	<input
																		type="checkbox"
																		className="custom-control-input"
																		id="customCheck1"
																		autoComplete="off"
																	/>
																	<label
																		className="custom-control-label"
																		htmlFor="customCheck1"
																	>
																		<span className="custom-control-description sr-only">
																			Select row 1
																		</span>
																	</label>
																</div>
															</th>
															<td>HTML</td>
														</tr>
														<tr>
															<th scope="row">
																<div className="custom-control custom-checkbox">
																	<input
																		type="checkbox"
																		className="custom-control-input"
																		id="customCheck2"
																		autoComplete="off"
																	/>
																	<label
																		className="custom-control-label"
																		htmlFor="customCheck2"
																	>
																		<span className="custom-control-description sr-only">
																			Select row 2
																		</span>
																	</label>
																</div>
															</th>
															<td>CSS</td>
														</tr>
														<tr>
															<th scope="row">
																<div className="custom-control custom-checkbox">
																	<input
																		type="checkbox"
																		className="custom-control-input"
																		id="customCheck3"
																		autoComplete="off"
																	/>
																	<label
																		className="custom-control-label"
																		htmlFor="customCheck3"
																	>
																		<span className="custom-control-description sr-only">
																			Select row 3
																		</span>
																	</label>
																</div>
															</th>
															<td>JAVASCRIPT</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<button
											type="button"
											class="btn btn-primary"
											style={{ width: "190px" }}
										>
											Valider
										</button>
									</div>
									<div
										className="tab-pane fade"
										id="profile"
										role="tabpanel"
										aria-labelledby="profile-tab"
									>
										{/*Contenue  */}
										<div className="row">
											<div className="col-4">
												<label
													for="validationCustom01"
													class="form-label is-required"
												>
													Catégories
												</label>
												<select
													class="form-select "
													aria-label=".form-select-lg example"
												>
													<option selected>Choix</option>
													<option value="1">Mobile</option>
													<option value="2">ios</option>
												</select>
											</div>
											<div className="col-4">
												<label
													for="validationCustom01"
													class="form-label is-required"
												>
													Technologies
												</label>
												<select
													class="form-select "
													aria-label=".form-select-lg example"
												>
													<option selected>Choix</option>
													<option value="1">Java</option>
													<option value="2">kotlin</option>
													<option value="2">sql</option>
													<option value="2">Mongodb</option>
													<option value="2">Firbase</option>
												</select>
											</div>
										</div>
										<div className="row">
											<div className="col-5">
												<br />
												<h5>Liste Technologie Ajouter</h5>
												<table className="table table-hover has-checkbox">
													<tbody>
														<tr>
															<th scope="row">
																<div className="custom-control custom-checkbox">
																	<input
																		type="checkbox"
																		className="custom-control-input"
																		id="customCheck4"
																		autoComplete="off"
																	/>
																	<label
																		className="custom-control-label"
																		htmlFor="customCheck4"
																	>
																		<span className="custom-control-description sr-only">
																			Select row 4
																		</span>
																	</label>
																</div>
															</th>
															<td>Java</td>
														</tr>
														<tr>
															<th scope="row">
																<div className="custom-control custom-checkbox">
																	<input
																		type="checkbox"
																		className="custom-control-input"
																		id="customCheck7"
																		autoComplete="off"
																	/>
																	<label
																		className="custom-control-label"
																		htmlFor="customCheck7"
																	>
																		<span className="custom-control-description sr-only">
																			Select row 7
																		</span>
																	</label>
																</div>
															</th>
															<td>Mongodb</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<button
											type="button"
											class="btn btn-primary"
											style={{ width: "190px" }}
										>
											Valider
										</button>
									</div>
									<div
										className="tab-pane fade"
										id="contact"
										role="tabpanel"
										aria-labelledby="contact-tab"
									>
										{/*Contenue  */}

										<div className="row">
											<div className="col-5">
												<br />
												<h5>Test Disponible</h5>
												<table className="table table-hover has-checkbox">
													<tbody>
														<tr>
															<th scope="row">
																<div className="custom-control custom-checkbox">
																	<input
																		type="checkbox"
																		className="custom-control-input"
																		id="customCheck5"
																		autoComplete="off"
																	/>
																	<label
																		className="custom-control-label"
																		htmlFor="customCheck5"
																	>
																		<span className="custom-control-description sr-only">
																			Select row 5
																		</span>
																	</label>
																</div>
															</th>
															<td>Concept de base </td>
														</tr>
														<tr>
															<th scope="row">
																<div className="custom-control custom-checkbox">
																	<input
																		type="checkbox"
																		className="custom-control-input"
																		id="customCheck6"
																		autoComplete="off"
																	/>
																	<label
																		className="custom-control-label"
																		htmlFor="customCheck6"
																	>
																		<span className="custom-control-description sr-only">
																			Select row 6
																		</span>
																	</label>
																</div>
															</th>
															<td>Test Avancé </td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<button
											type="button"
											class="btn btn-primary"
											style={{ width: "190px" }}
										>
											Valider
										</button>
									</div>
								</div>
							</div>
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
									Les Tests Envoyer aux Candidatures avec succès
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
