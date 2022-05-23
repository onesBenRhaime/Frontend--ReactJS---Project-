import React from "react";
import Menu from "../SideBar";
import Header from "../Navbar";

export default function ListeCand() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper">
					<section className="content">
						{/* /.card */}
						<div className="card">
							<h3 style={{ textAlign: "center", marginTop: "20px" }}>
								Liste des candidats
							</h3>

							{/* /.card-header */}
							<div className="card-body">
								<table
									id="listC"
									className="table table-bordered table-striped"
								>
									<thead>
										<tr>
											<th>Nom</th>
											<th>Prénom</th>
											<th>Email</th>
											<th>Télephone</th>
											<th>Profile</th>
											<th>Activer/Désactiver</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
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
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
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
												</a>
												{/* <a
													href="#modal-supp"
													className="btn btn-warning"
													data-bs-toggle="modal"
												>
													<ion-icon name="mail-open-outline"></ion-icon>
												</a> */}
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
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
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
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
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
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
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
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
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur web </td>
											<td class="d-flex justify-content-center">
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
									</tbody>
								</table>
								<div className="card-footer">
									<div class="d-flex justify-content-center">
										<nav aria-label="Page navigation example with icons">
											<ul class="pagination">
												<li class="page-item">
													<a
														class="page-link"
														href="i"
														aria-label="Previous"
													></a>
												</li>
												<li class="page-item">
													<a class="page-link" href="i" aria-label="Next"></a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							{/* /.card-body */}
						</div>
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
							></button>
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
								<h3 className="profile-username text-center">
									Ones Bne Rhaime
								</h3>
								<p className="text-muted text-center">Développeur Web </p>
								<ul className="list-group list-group-unbordered mb-3">
									<li className="list-group-item">
										<b>Télephone</b> <p className="float-right">21866975</p>
									</li>

									<li className="list-group-item">
										<b>E-mail</b>
										<p className="float-right">Onesrhaime28@gmail.com</p>
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
