
<div className=" row">
							<div
								className="col-4"
								style={{
									textAlign: "center",
								}}
							>
								{/* small box */}
								<div
									className="small-box-footer bg-light text-dark"
									style={{ marginRight: 50 }}
								>
									<Link to="/session/WebTestResult">
										<div
											style={{
												padding: 20,
												backgroundColor: "white",
												borderStyle: "solid",
												borderColor: "black",
											}}
										>
											
											<br />
											<h3> Développement Web </h3>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<br />
						<div className=" row">
							<div
								className="col-4"
								style={{
									textAlign: "center",
								}}
							>
								{/* ./col */}

								{/* small box */}
								<div className="small-box-footer bg-light text-dark">
									<Link to="/dashboard/start">
										<div
											style={{
												padding: 20,
												backgroundColor: "#FFFFFF",
												borderStyle: "solid",
												borderColor: "black",
											}}
										>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/ios/100/000000/one-time-password.png"
														alt=""
													/>
												</i>Développement Mobile 
											</div>
											<br />
											<h3></h3>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<br />
						<div className=" row">
							<div
								className="col-4"
								style={{
									textAlign: "center",
								}}
							>
								<div
									className="small-box-footer bg-light text-dark"
									style={{
										textAlign: "center",
										marginLeft: "30rem",
										borderStyle: "solid",
										borderColor: "black",
									}}
								>
									<Link to="/dashboard/start">
										<div style={{ padding: 20, backgroundColor: "#FFFFFF" }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/ios/100/000000/design--v1.png"
														alt=""
													/>
												</i>
											</div>
											<br />
											<h3>Design </h3>
											<br />
										</div>
									</Link>
								</div>
							</div>
						</div>




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
								<li className="stepbar-item">
									<Link className="stepbar-link" to="" title="5. Place order">
										Appeler
									</Link>
								</li>
							</ol>
						</nav>



// Session 
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import Sidebar from "../SideBar";
import imgS from "./undraw_Interview_re_e5jn.png";
import imgA from "./undraw_Collaborators_re_hont.png";
import imgL from "./undraw_Collecting_re_lp6p.png";
export default function Dashboard() {
	useSelector((state) => state.session);

	return (
		<div>
			<Sidebar />
			<Navbar />
			<div className="wrapper">
				{/* Content Wrapper. Contains page content */}
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					{/* Main content */}
					<section className="content">
						<div className="row">
							<div className="col-12" style={{ margin: 40 }}>
								<h1 style={{ textAlign: "center", margin: 20 }}>
									<img src={imgS} alt="" width="200px" />
									Session de recrutement <br />
								</h1>
							</div>
						</div>

						{/*  */}
						<div
							className="row"
							style={{
								marginLeft: "300px",
								marginRight: "200px",
							}}
						>
							{" "}
							<h1 style={{ textAlign: "center", margin: 20 }}>Processus</h1>
							<div className="col-lg-6 col-6" style={{ textAlign: "center" }}>
								<div className="small-box-footer bg-light text-dark">
									<Link to="/session/ajouter">
										<div
											className="inner"
											style={{ padding: 20, backgroundColor: "#FFFFFF" }}
										>
											<img src={imgA} alt="" width="300px" />
										</div>{" "}
										<br />
										<p>Lister </p>
									</Link>
								</div>
							</div>
							<div className="col-lg-6 col-6" style={{ textAlign: "center" }}>
								<div className="small-box-footer bg-light text-dark">
									<Link to="/session/resultat">
										<div
											className="inner"
											style={{ padding: 20, backgroundColor: "#FFFFFF" }}
										>
											<img src={imgA} alt="" width="300px" />
										</div>{" "}
										<br />
										<p>Lister </p>
									</Link>
								</div>
							</div>
							<pre></pre>
							<div className="col-lg-6 col-6" style={{ textAlign: "center" }}>
								<div className="small-box-footer bg-light text-dark">
									<Link to="/session/ajouter">
										<div
											className="inner"
											style={{ padding: 20, backgroundColor: "#FFFFFF" }}
										>
											<img src={imgL} alt="" width="300px" />

											<br />
											<h1>Lister</h1>
										</div>
									</Link>
								</div>
							</div>{" "}
							<div className="col-lg-6 col-6" style={{ textAlign: "center" }}>
								<div className="small-box-footer bg-light text-dark">
									<Link to="/session/ajouter">
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
											<p>Ajouter </p>
										</div>
									</Link>
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
