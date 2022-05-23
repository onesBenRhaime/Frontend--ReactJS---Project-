import React from "react";
import Menu from "../Navbar";
import Header from "..//SideBar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function Resultats() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					{/* Main content */}
					<section className="content">
						<div className="row">
							<div className="col-10">
								<h2
									style={{
										color: "#0099CC",
										marginLeft: "3rem",
										marginTop: "30px",
									}}
								>
									Session de recrutement : <b> PFE 2022</b>
								</h2>
							</div>
						</div>
						<div className="row">
							<div class="col-sm-4">
								<div class="card">
									<div class="card-body">
										<p class="card-text" style={{ fontSize: 20 }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/dotty/50/000000/internet-browser.png"
														alt=""
													/>
												</i>
												Developpemnet Web
											</div>
										</p>

										<Link to="/session/WebTestResult" class="btn btn-primary">
											Afficher
										</Link>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="card">
									<div class="card-body">
										<p class="card-text" style={{ fontSize: 20 }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/ios/50/000000/one-time-password.png"
														alt=""
													/>
												</i>
												Développement Mobile
											</div>
										</p>
										<Link to="/session/WebTestResult" class="btn btn-primary">
											Afficher
										</Link>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="card">
									<div class="card-body">
										<p class="card-text" style={{ fontSize: 20 }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/ios/50/000000/design--v1.png"
														alt=""
													/>
												</i>
												UX Design
											</div>
										</p>

										<Link to="/session/WebTestResult" class="btn btn-primary">
											Afficher
										</Link>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="card">
									<div class="card-body">
										<p class="card-text" style={{ fontSize: 20 }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/ios/50/000000/design--v1.png"
														alt=""
													/>
												</i>
												Formation FullStack
											</div>
										</p>

										<Link to="/session/WebTestResult" class="btn btn-primary">
											Afficher
										</Link>
									</div>
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
