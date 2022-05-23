import React from "react";
import Menu from "../SideBar";
import Header from "../Navbar";
import { Button } from "@mui/material";

export default function TestResult() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<section className="content">
						<div className="row">
							<div className="col-10">
								<h2
									style={{
										marginLeft: "2rem",
										marginTop: "30px",
									}}
								>
									Session de recrutement : <b> PFE 2022</b>
								</h2>
								<h4
									style={{
										color: "#ff7900",
										marginLeft: "6rem",
									}}
								>
									Developpemnet Web
								</h4>
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
										class="btn  btn-block btn-primary "
										href="#filterSelon"
										data-bs-toggle="modal"
									>
										Filtrer selon
									</Button>

									<Button
										type="submit"
										// class="btn btn-block  btn-primary btn-lg"
										class="btn  btn-block btn-primary "
										href="#addToShortList"
										data-bs-toggle="modal"
									>
										Présélectionner
									</Button>
								</div>
							</div>
						</div>
						<br />
						<table class="table table-hover">
							<thead>
								<tr>
									{" "}
									<th scope="col">
										{" "}
										<input type="checkbox" className="primary" />
									</th>
									<th scope="col">Candidat</th>
									<th scope="col">Technologie</th>
									<th scope="col">Score</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">
										<input type="checkbox" />
									</th>
									<td>Mark</td>
									<td>html</td>
									<td>60/100</td>
								</tr>
								<tr>
									<th scope="row">
										<input type="checkbox" />
									</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>60/100</td>
								</tr>
								<tr>
									<th scope="row">
										<input type="checkbox" />
									</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>60/100</td>
								</tr>
							</tbody>
						</table>
					</section>
					{/* Model Filter  */}
					<div
						className="modal fade"
						id="filterSelon"
						tabIndex={-1}
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog">
							<div className="modal-content">
								<h3 className=" text-primary d-flex  justify-content-center ">
									Afficher Selon
								</h3>

								<div className="modal-body">
									<form>
										<div className="mb-3">
											<label
												htmlFor="recipient-name"
												className="col-form-label"
											>
												Categories:
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
										<div className="mb-3">
											<label htmlFor="message-text" className="col-form-label">
												Technologies :
											</label>

											<select
												class="form-select "
												aria-label=".form-select-lg example"
											>
												<option selected disabled value>
													Choose...
												</option>
												<option value="1">html</option>
												<option value="2">css</option>
											</select>
										</div>
										<div className="mb-3">
											<label htmlFor="message-text" className="col-form-label">
												Score :
											</label>

											<input
												type="number"
												name="score"
												className="form-control"
												id="score"
												required
											/>
										</div>
									</form>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
									>
										Fermer
									</button>
									<button type="button" className="btn btn-primary">
										Filtrer
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* /Models  */}

					<div
						class="modal fade"
						id="addToShortList"
						aria-hidden="true"
						aria-labelledby="exampleModalToggleLabe"
						tabindex="-1"
					>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content">
								<div class="modal-header">
									<button
										type="button"
										class="btn-close"
										data-bs-dismiss="modal"
									>
										<span class="visually-hidden">Close</span>
									</button>
								</div>
								<div class="modal-body">
									<span class="icon-success">
										<span class="visually-hidden">Success</span>
									</span>
									<h3 style={{ textAlign: "center", margin: "1rem" }}>
										Les Candidats Sélectionnés à ete ajouter a la Liste de
										Présélection des candidats
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
