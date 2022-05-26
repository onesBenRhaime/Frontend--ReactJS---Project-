import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../Sidebar";
import Header from "../Topbar";
export default function ListeQ() {
	const params = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [listQ, setlistQ] = useState([]);
	const [idQ, setIdQ] = useState("");
	useEffect(() => {
		const getAllQuestion = async () => {
			console.log("/***** Get All Questions ******/");
			await axios
				.get(`http://localhost:3000/api/admin/allQuestions`)
				.then((response) => {
					console.log(response);
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
		console.log("/*****delete Question******/");
		await axios
			.delete(`http://localhost:3000/api/admin/deleteQuestion?id=${id}`)
			.then((response) => {
				console.log(response);
				//filtrage
				const qu = listQ.filter((qu) => qu._id !== id);
				setlistQ(qu);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	const goToUpdate = (id) => {
		console.log("nafigate to Q : ", id);
		navigate("/InfoQuestion/" + id);
	};
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
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
															<button
																//	to="/InfoQuestion"
																className="btn btn-success"
																onClick={() => goToUpdate(item._id)}
															>
																<i className="fas fa-eye" />
															</button>

															<a
																data-bs-toggle="modal"
																href="#modelSupp"
																className="btn btn-danger"
																value={index}
																name="idQ"
																onClick={() => setIdQ(item._id)}
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
						id="modelSupp"
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
