import React, { Component } from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export default class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<Navbar />
					<SideBar />
					<div className="wrapper ">
						<div
							className="content-wrapper"
							style={{ backgroundColor: "white" }}
						>
							<section>
								<h2
									style={{
										color: "#0099CC",
										marginLeft: "50px",
										marginTop: "20px",
									}}
								>
									Session PFE-2022
								</h2>

								<br />
								<div class="container-sm">
									{/* /.card-header */}
									<div className="card">
										<div className="row  justify-content-center">
											<div
												className="col-lg-4 "
												style={{ fontSize: "20px", margin: "2rem" }}
											>
												<h1>Importer un fichier </h1>
												<br />
												<br />
												<div className="form-group">
													<input type="file" />
													<br />
													<br />
												</div>
												<div className="row">
													<div className="col-4">
														<div className="form-group">
															<button
																className="btn btn"
																type="submit"
																style={{ backgroundColor: "#E67E22" }}
															>
																Importer
															</button>
														</div>
													</div>
													<div className="col-4">
														<div className="form-group">
															<button
																className="btn btn-"
																type="submit"
																style={{ backgroundColor: "#E67E22" }}
															>
																Annuler
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>{" "}
									<br />
									<div className=" position-relative ">
										<div className="col-3 position-absolute top-50 start-100 translate-middle">
											<Link
												to="/session/exporter"
												type="button"
												class="btn btn-primary position-relative"
											>
												Suivant
											</Link>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
