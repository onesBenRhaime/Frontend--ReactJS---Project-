import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import Sidebar from "../SideBar";

export default function AfficherTest() {
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
						<div className=" row">
							<div
								className="col-4"
								style={{
									textAlign: "center",
									margin: "5rem",
								}}
							>
								{/* small box */}{" "}
								<Link to="/manage/test/tests">
									<div style={{ padding: 20, backgroundColor: "white" }}>
										<i>
											<img
												src="https://img.icons8.com/dotty/100/000000/internet-browser.png"
												alt=""
											/>
										</i>
										<br />
										<br />
										<h3> Développement Web </h3>
									</div>{" "}
								</Link>
							</div>
							{/* ./col */}
							<div
								className="col-4"
								style={{ textAlign: "center", margin: "5rem" }}
							>
								{/* small box */}
								<Link to="/manage/test/tests">
									<div style={{ padding: 20, backgroundColor: "white" }}>
										<i>
											<img
												src="https://img.icons8.com/ios/100/000000/one-time-password.png"
												alt=""
											/>
										</i>
										<br /> <br />
										<h3>Développement Mobile </h3>
									</div>
								</Link>
							</div>
							<div
								className=" col-4"
								style={{
									textAlign: "center",

									marginLeft: "5rem",
								}}
							>
								<Link to="/manage/test/tests">
									<div style={{ padding: 20, backgroundColor: "white" }}>
										<i>
											<img
												src="https://img.icons8.com/ios/100/000000/design--v1.png"
												alt=""
											/>
										</i>
										<br /> <br />
										<h3>Design </h3>
									</div>
								</Link>
							</div>
						</div>
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
