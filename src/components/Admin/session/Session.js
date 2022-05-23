import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Topbar";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";
//import imgS from "./undraw_Interview_re_e5jn.png";
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
									{/* <img src={imgS} alt="" width="200px" /> */}
									Session de recrutement <br />
								</h1>
							</div>
						</div>

						{/*  */}
						<div className="row">
							<div className="col-lg-6 col-6" style={{ textAlign: "center" }}>
								<div className="small-box-footer bg-light text-dark">
									<Link to="/session/ajouter">
										<div style={{ padding: 20, backgroundColor: "#FFFFFF" }}>
											<img src={imgA} alt="" width="450px" />
											<br />
											<h4>Ajouter</h4>
										</div>
									</Link>
								</div>
							</div>{" "}
							<div className="col-lg-6 col-6" style={{ textAlign: "center" }}>
								<div className="small-box-footer bg-light text-dark">
									<Link to="/session/listeSession">
										<div style={{ padding: 20, backgroundColor: "#FFFFFF" }}>
											<img src={imgL} alt="" width="550px" />
											<br />
											<h4>Lister</h4>
										</div>
									</Link>
								</div>
							</div>{" "}
						</div>
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
