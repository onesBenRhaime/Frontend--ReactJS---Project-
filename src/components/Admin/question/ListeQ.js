import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Sidebar";
import Header from "../Topbar";
export default function ListeQ() {
	const [loading, setLoading] = useState(true);
	const [listQ, setlistQ] = useState([]);
	const [idQ, setIdQ] = useState("");
	useEffect(() => {
		const getAllQuestion = async () => {
			await axios
				.get(`http://localhost:3000/api/admin/allQuestions`)
				.then((response) => {
					console.log("/***** Get All Questions ******/", response);
					setlistQ(response.data.questions);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err.message);
					setLoading(false);
				});
		};
		getAllQuestion();
	}, []);

	const delQuestion = async (id) => {
		await axios
			.delete(`http://localhost:3000/api/admin/deleteQuestion?id=${id}`)
			.then((response) => {
				console.log(" 0000 : ", response);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<div className="row">
						<div className="col-8">
							<h2
								style={{
									color: "#ff7900",
									marginLeft: "50px",
									marginTop: "30px",
								}}
							>
								Liste des Questions{" "}
							</h2>
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
											<th>Domaine</th>
											<th>Technologies </th>
											<th>Score</th>
											<th>Niveau</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{" "}
										{listQ.map((item, index) => {
											return (
												<tr key={index}>
													<td>{item.domaine}</td>
													<td>{item.technologie}</td>
													<td>{item.score}</td>
													<td>{item.niveau}</td>
													<td>
														<div class="d-flex justify-content-center">
															<Link
																to="/InfoQuestion"
																className="btn btn-success"
															>
																<i className="fas fa-eye" />
															</Link>

															<a
																data-bs-toggle="modal"
																href="#exampleModalToggle"
																className="btn btn-danger"
																value={index}
																name="idQ"
																onChange={() => setIdQ(item._id)}
															>
																<i className="fas fa-trash" />
															</a>
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
									<h3
										style={{
											textAlign: "center",
											marginTop: "1rem",
										}}
									>
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
										onClick={() => delQuestion(idQ)}
									>
										Oui
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* /Models Delete  */}
				</div>
			</div>
		</div>
	);
}
