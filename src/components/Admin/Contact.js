import React from "react";
import Admin from "./img/admin.png";
import Menu from "./Sidebar";
import Header from "./Topbar";
export default function Contact() {
	return (
		<div>
			<Menu />
			<Header />
			{/* Main content */}

			<div className="wrapper">
				<div class="content-wrapper">
					<section className="content-header">
						<div className="container-fluid">
							<div className="row mb-2">
								<div className="col-sm-6">
									<h1>Contact </h1>
								</div>
								<div className="col-sm-6">
									<ol className="breadcrumb float-sm-right">
										<li className="breadcrumb-item">Acceuil</li>
										<li className="breadcrumb-item active">Contact </li>
									</ol>
								</div>
							</div>
						</div>
						{/* /.container-fluid */}
					</section>

					<section className="content">
						{/* Default box */}
						<div className="card">
							<div className="card-body row">
								<div className="col-5 text-center d-flex align-items-center justify-content-center">
									<div className>
										<img src={Admin} alt="img" />
									</div>
								</div>
								<div className="col-7">
									<br /> <br />
									<div className="form-group">
										<label htmlFor="inputEmail">E-Mail</label>
										<input
											type="email"
											id="inputEmail"
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="inputSubject">Objet</label>
										<input
											type="text"
											id="inputSubject"
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="inputMessage">Message</label>
										<textarea
											id="inputMessage"
											className="form-control"
											rows={4}
											defaultValue={""}
										/>
									</div>
									<div className="form-group">
										<label for="exampleInputFile">File input</label>
										<div className="input-group">
											<div className="custom-file">
												<input
													type="file"
													className="custom-file-input"
													id="exampleInputFile"
												/>
												<label
													className="custom-file-label"
													for="exampleInputFile"
												>
													choisir une fichier
												</label>
											</div>
										</div>
									</div>
									<button
										type="button"
										class="btn btn-flat"
										style={{ backgroundColor: "#E67E22" }}
									>
										<label htmlFor="inputSubject">Envoyer</label>
									</button>
								</div>
							</div>
						</div>
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
