import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Sidebar from "./SideBar";

export default function Dashboard() {
	useSelector((state) => state.session);

	return (
		<div>
			<Sidebar />
			<Navbar />
			<div className="wrapper">
				{/* Content Wrapper. Contains page content */}
				<div className="content-wrapper">
					{/* Main content */}
					<section className="content">
						<div className="row " style={{ marginLeft: "15rem" }}>
							<div
								className="col-lg-5 col-11"
								style={{
									textAlign: "center",
									marginTop: "5rem",
								}}
							>
								{/* small box */}
								<div className="small-box-footer bg-light text-dark">
									<Link to="/dashboard/session">
										<div
											className="inner"
											style={{ padding: 20, backgroundColor: "white" }}
										>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/000000/external-recruitment-marketing-and-growth-konkapp-detailed-outline-konkapp.png"
														alt=""
													/>
												</i>
											</div>
											<br />
											<p>Commencer la session de recrutement </p>
										</div>
									</Link>
								</div>
							</div>
							{/* ./col
							  <div className="col-lg-4 col-3">
							
								<div className="small-box-footer bg-light text-dark">
									<Link to="/session/tester">
										<div
											className="inner"
											style={{ padding: 20, backgroundColor: "#FFFFFF" }}
										>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/000000/external-recruitment-marketing-and-growth-konkapp-detailed-outline-konkapp.png"
														alt=""
													/>
												</i>
											</div>
											<br />
											<p>Recruter par recommandation </p>
										</div>
									</Link>
								</div>
							 </div>
							*/}
							{/* small box */}
							<div
								className="col-lg-5 col-11"
								style={{
									textAlign: "center",
									marginTop: "5rem",
								}}
							>
								{/* small box */}
								<div className="small-box-footer bg-light text-dark">
									<Link to="/dashboard/session">
										<div
											className="inner"
											style={{ padding: 20, backgroundColor: "white" }}
										>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/000000/external-recruitment-marketing-and-growth-konkapp-detailed-outline-konkapp.png"
														alt=""
													/>
												</i>
											</div>
											<br />
											<p>Recruter par recommandation </p>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<br /> <br />
						<br />
						<div className="row">
							<div className="col-12">
								<h1 style={{ textAlign: "center", margin: 10 }}>
									Chaine de recrutement
								</h1>
								<br />
							</div>
						</div>
						<br />
						<br />
						<nav
							role="navigation"
							className="o-stepbar"
							aria-label="Checkout process"
							style={{
								marginLeft: "200px",
								marginRight: "200px",
							}}
						>
							<ol>
								<li className="stepbar-item">
									<Link className="stepbar-link" to="#" title="1. Sign in">
										Importer un fichier
									</Link>
								</li>
								<li className="stepbar-item current">
									<Link
										className="stepbar-link"
										to=""
										title="2. Review"
										aria-current="step"
									>
										Exporter
									</Link>
								</li>
								<li className="stepbar-item">
									<Link className="stepbar-link" to="" title="3. Delivery">
										Génèrer des comptes
									</Link>
								</li>
								<li className="stepbar-item">
									<Link className="stepbar-link" to="" title="4. Payment">
										Génèrer des Tests
									</Link>
								</li>
								<li className="stepbar-item">
									<Link className="stepbar-link" to="" title="5. Place order">
										Affecter
									</Link>
								</li>
							</ol>
						</nav>
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
