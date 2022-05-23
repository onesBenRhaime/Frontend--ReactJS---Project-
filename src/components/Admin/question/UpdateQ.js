import React from "react";
import Menu from "../Sidebar";
import Header from "../Topbar";
export default function UpdateQ() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper">
					<section className="content">
						{/* /.card */}
						<div className="card">
							<h3 style={{ textAlign: "center", marginTop: "30px" }}>
								Titre De Questions
							</h3>

							{/* /.card-header */}
							<div className="card-body"></div>
							{/* /.card-body */}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
