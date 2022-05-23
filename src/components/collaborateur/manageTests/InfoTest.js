import React from "react";
import Menu from "../SideBar";
import Header from "../Navbar";
export default function InfoT() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper">
					<section className="content">
						{/* /.card */}
						<div className="card">
							<h3 style={{ textAlign: "center", marginTop: "30px" }}>
								Titre De Test
							</h3>

							{/* /.card-header */}
							<div className="card-body"></div>
							{/* /.card-body */}
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
												<div className="input-group">
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
													<pre></pre>
													<button className="btn btn-success">
														<i className="fas fa-check" />
													</button>
												</div>
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
			</div>
		</div>
	);
}
