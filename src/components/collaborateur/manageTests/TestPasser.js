import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../SideBar";
import Header from "../Navbar";
export default function ListeQ() {
	const [loading, setLoading] = useState(true);
	const [listT, setlistT] = useState([]);
	useEffect(() => {
		const getAllSession = async () => {
			await axios
				.get(`http://localhost:3000/api/`)
				.then((response) => {
					console.log("/***** Get All Tests :  with domaine ******/", response);
					setlistT(response.data.tests);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err.message);
					setLoading(false);
				});
		};
		getAllSession();
	}, []);

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
								Liste des Tests déjà passés dans le domaine du Développement Web
							</h5>
						</div>
					</div>
					<section className="content">
						<div className="card-body">
							{loading ? (
								<div class="position-relative" style={{ marginTop: "15rem" }}>
									<div class="position-absolute top-50 start-50 translate-middle">
										<div
											class="spinner-border  spinner-border-lg"
											role="status"
										>
											<span class="visually-hidden">
												<CircularProgress />
											</span>
										</div>
									</div>
								</div>
							) : (
								<table className="table  table-hover table-sm">
									<thead>
										<tr>
											<th>Session</th>
											<th>Technologies </th>
											<th>Score</th>
											<th>Candidat</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{" "}
										{listT.map((item, index) => {
											return (
												<tr key={index}>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
													<td>
														<div class="d-flex justify-content-center">
															<Link to="/InfoQuestion">
																<i className="fas fa-eye" />
															</Link>
														</div>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							)}
						</div>
					</section>

					{/* /Models Delete  */}

					<div
						class="modal fade"
						id="exampleModalToggle"
						aria-hidden="true"
						aria-labelledby="exampleModalToggleLabel"
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
									<h3 style={{ textAlign: "center", marginTop: "1rem" }}>
										Êtes-vous sûr de vouloir <br />
										<br /> supprimer ?
									</h3>
								</div>
								<div class="modal-footer">
									<button
										class="btn btn-danger"
										data-bs-target="#exampleModalToggle2"
										data-bs-toggle="modal"
										style={{ textAlign: "center" }}
									>
										Oui
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
