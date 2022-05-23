import React from "react";
import Menu from "../SideBar";
import Header from "../Navbar";

export default function AddCand() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper card">
				<div className="content-wrapper">
					<section class="container-sm">
						{/* SELECT2 EXAMPLE */}
						<div className="card" style={{ marginTop: "3rem" }}>
							{" "}
							<br />
							<h2 style={{ textAlign: "center", marginTop: "3rem" }}>
								Ajouter Un candidat
							</h2>
							{/* /.card-header */}
							<div className="card-body" style={{ marginTop: "2rem" }}>
								<form>
									<div className="row">
										<div className="col-6">
											<div className="form-group">
												<label>Nom</label>
												<input
													type="text"
													name="nom"
													className="form-control"
													id="nom"
													required
												/>
											</div>{" "}
										</div>
										<div className="col-6">
											<div className="form-group">
												<label>Prénom</label>
												<input
													type="text"
													name="prenom"
													className="form-control"
													id="prenom"
													required
												/>
											</div>{" "}
										</div>
									</div>
									<div className="row">
										<div className="col-6">
											<div className="form-group">
												<label>Telephone</label>
												<input
													type="text"
													name="tel"
													className="form-control"
													id="tel"
													required
												/>
											</div>{" "}
										</div>
										<div className="col-6">
											<div className="form-group">
												<label>Addresse</label>
												<input
													type="text"
													name="adresse"
													id="adresse"
													className="form-control"
													required
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-6">
											<div className="form-group">
												<label>E-mail</label>
												<input
													type="text"
													name="email"
													className="form-control"
													id="email"
													validators={["required", "isEmail"]}
												/>
											</div>{" "}
										</div>
										<div className="col-6">
											<div className="form-group">
												<label>Profile</label>
												<input
													type="text"
													name="profile"
													className="form-control"
													id="profile"
													required
												/>
											</div>{" "}
										</div>
									</div>

									<hr />
									<br />
									{/* Button  */}
									<div className="row justify-content-end">
										<div className="col-2">
											<button
												type="button"
												class="btn btn-block  btn-primary btn-lg"
											>
												Ajouter
											</button>
										</div>
										<div className="col-2">
											<button
												type="reset"
												class="btn btn-block btn-danger btn-lg"
											>
												Annuler
											</button>
										</div>
									</div>
									<br />
									<br />
								</form>{" "}
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
