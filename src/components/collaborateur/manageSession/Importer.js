import { Button } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

export default function UploadFile() {
	return (
		<div>
			<Navbar />
			<SideBar />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<section className="content">
						<div style={{ marginTop: "20px" }}>
							<h2
								style={{
									color: "#0099CC",
									marginLeft: "10px",
								}}
							>
								Tester des Stagiares
							</h2>
							<div style={{ marginLeft: "90rem" }}>
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
						<div
							style={{
								margin: "30px",
							}}
						>
							<form className="row g-3 needs-validation" noValidate>
								<div className="col-md-3">
									<label
										htmlFor="validationCustom04"
										className="form-label is-required"
									>
										Domaine
									</label>
									<select
										className="form-select"
										id="validationCustom04"
										required
									>
										<option selected disabled value>
											Choose...
										</option>
										<option> Développement Web</option>
										<option> Développement Mobile</option>
										<option> Design</option>
									</select>
								</div>
								<div className="col-md-4">
									<label
										htmlFor="validationCustom02"
										className="form-label is-required"
									>
										Catégories
									</label>
									<select
										className="form-select"
										id="validationCustom04"
										required
									>
										<option selected disabled value>
											Choose...
										</option>
										<option value="1">FrontEnd</option>
										<option value="2">Backend</option>
									</select>
								</div>
								<div className="col-md-4">
									<label className="form-label is-required">Technologie</label>
									<div className="input-group has-validation">
										<input
											type="text"
											className="form-control"
											id="validationCustomUsername"
											aria-describedby="inputGroupPrepend"
											required
										/>
										<pre></pre>
										<Button className="btn btn-success">
											<i className="fas fa-eye" />
										</Button>
									</div>
								</div>
								<hr />

								<div className="col-md-6">
									<label htmlFor="validationCustom03" className="form-label ">
										Liste question
									</label>
								</div>
								<div className="row">
									<div className="col-md-4">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">
												E-mail de candidat
											</label>
											<span class="input-group-text" id="inputGroupPrepend2">@</span>
											<input
												type="text"
												name="titre"
												className="form-control"
												validators={["required", "isEmail"]}
											/>
										</div>
									</div>
								</div>
								<div className="col-12">
									<button className="btn btn-primary" type="submit">
										Submit form
									</button>
								</div>
							</form>
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
