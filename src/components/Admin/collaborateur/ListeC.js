import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../Sidebar";
import Header from "../Topbar";
export default function ListeC() {
	const [loading, setLoading] = useState(true);
	const [listColl, setlistColl] = useState([]);
	useEffect(() => {
		const getAllColl = async () => {
			await axios
				.get(`http://localhost:3000/api/admin/findAll`)
				.then((response) => {
					console.log("/***** Get All Coll ******/", response);
					setlistColl(response.data.users);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err.message);
					setLoading(false);
				});
		};
		getAllColl();
	}, []);

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
								Liste des Collaborateur Orange
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
							// <table className="table  table-hover table-striped">
							<div style={{ margin: "50px" }}>
								<table className="table table-hover">
									<thead>
										<tr>
											<th>Nom</th>
											<th>Prénom</th>
											<th>Email</th>
											<th>Profile</th>
											<th>Télephone</th>
											<th>Adresse</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{listColl.map((item, index) => {
											return (
												<tr key={index}>
													<td>{item.nom}</td>
													<td>{item.prenom}</td>
													<td>{item.email}</td>
													<td>{item.profile}</td>
													<td>{item.tel}</td>
													<td>{item.adresse}</td>
													<td class=" justify-content-center">
														<a
															href="#modal-compte"
															className="btn btn-success"
															data-bs-toggle="modal"
														>
															<i className="fas fa-eye" />
														</a>
														<a
															href="#modal-supp"
															className="btn btn-danger"
															data-bs-toggle="modal"
														>
															<i className="fas fa-trash" />
														</a>{" "}
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

			{/**Modals  Collaborateur  */}
			<div className="modal fade" id="modal-supp">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">
								Désactiver une compte Collaborateur
							</h4>
						</div>
						<div className="modal-body">
							<p class="d-flex justify-content-center">
								<br /> Êtes-vous sûr de vouloir désactiver ce compte ?
							</p>
						</div>
						<div className="modal-footer justify-content-between">
							<button
								type="button"
								className="btn btn-default"
								data-bs-dismiss="modal"
							>
								Close
							</button>

							<button type="button" className="btn btn-danger">
								<i className="fas fa-trash" />
							</button>
						</div>
					</div>
					{/* /.modal-content */}
				</div>
				{/* /.modal-dialog */}
			</div>

			<div className="modal fade" id="modal-compte">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="close"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">× </span>
							</button>
						</div>

						<div className="modal-body">
							<div className="card-body box-profile">
								<div className="text-center">
									<img
										classname="profile-user-img img-fluid img-circle"
										src="../../../public/dist/img/admin.png"
										alt=""
									/>
								</div>
								<h3 className="profile-username text-center">Ines Khalifa</h3>
								<p className="text-muted text-center">FullStack Développeur</p>
								<ul className="list-group list-group-unbordered mb-3">
									<li className="list-group-item">
										<b>Télephone</b> <p className="float-right">21866975</p>
									</li>

									<li className="list-group-item">
										<b>E-mail</b>
										<p className="float-right">ines@orange.com</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* /.modal-content */}
				</div>
				{/* /.modal-dialog */}
			</div>
		</div>
	);
}
