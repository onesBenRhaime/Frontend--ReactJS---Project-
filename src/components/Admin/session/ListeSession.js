import React, { useEffect, useState } from "react";
import SideBar from "../Sidebar";
import Navbar from "../Topbar";

import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ListeCandidat() {
	const [loading, setLoading] = useState(true);
	const [listSess, setlistSess] = useState([]);
	useEffect(() => {
		const getAllSession = async () => {
			await axios
				.get(`http://localhost:3000/api/admin/getAllSession`)
				.then((response) => {
					console.log("/***** Get All Session ******/", response);
					setlistSess(response.data.session);
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
			<Navbar />
			<SideBar />
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
								Liste des Sessions
							</h2>
						</div>
					</div>
					<section className="content">
						{loading ? (
							<div class="position-relative" style={{ marginTop: "20rem" }}>
								<div class="position-absolute top-50 start-50 translate-middle">
									<div class="spinner-border  spinner-border-lg" role="status">
										<span class="visually-hidden">
											<CircularProgress />
										</span>
									</div>
								</div>
							</div>
						) : (
							<div
								style={{
									margin: "50px",
								}}
							>
								<table className="table table-hover">
									<thead>
										<tr>
											<th scope="col">Nom</th>
											<th scope="col">type</th>
											<th scope="col">date Début</th>
											<th scope="col">Date Fin</th>
											<th scope="col">Responsable </th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{listSess.map((item, index) => {
											return (
												<tr key={index}>
													<td>{item.nom}</td>
													<td>{item.type}</td>
													<td>{item.dateD}</td>
													<td>{item.dateF}</td>
													<td>{item.responsable}</td>
													<td>
														<Link to="" data-bs-toggle="modal">
															<i className="fas fa-edit" />
														</Link>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						)}
					</section>
				</div>
			</div>
		</div>
	);
}
