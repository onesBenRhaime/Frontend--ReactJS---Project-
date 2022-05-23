import React from "react";
import Menu from "../SideBar";
import Header from "../Navbar";
import { Button } from "@mui/material";

export default function Shortlist() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<section className="content">
						<div className="row">
							<div className="col-10">
								<h2
									style={{
										color: "#ff7900",
										marginLeft: "2rem",
										marginTop: "30px",
									}}
								>
									Liste des candidats présélectionnés
								</h2>
							</div>
							<div className="col-2">
								<div style={{ marginLeft: "2rem", marginTop: "30px" }}>
									<Button
										type="submit"
										class="btn btn-primary position-relative"
										href="#appeler"
										data-bs-toggle="modal"
									>
										Appeler
									</Button>
								</div>
							</div>
						</div>

						<br />
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">
										{" "}
										<input type="checkbox" className="primary" />
									</th>
									<th scope="col">Nom</th>
									<th scope="col">Cv</th>
									<th scope="col">Domaine </th>
									<th scope="col">E-mail </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">
										<input type="checkbox" />
									</th>
									<td>Mark</td>
									<td>cv.pdf</td>
									<td>web</td>
									<td>ones@gmail.com</td>
								</tr>
								<tr>
									<th scope="row">
										<input type="checkbox" />
									</th>
									<td>Mark</td>
									<td>cv.pdf</td>
									<td>web</td>
									<td>ones@gmail.com</td>
								</tr>
								<tr>
									<th scope="row">
										<input type="checkbox" />
									</th>
									<td>Mark</td>
									<td>cv.pdf</td>
									<td>web</td>
									<td>ones@gmail.com</td>
								</tr>
							</tbody>
						</table>
					</section>
					{/* /Models  */}

					<div
						class="modal fade"
						id="appeler"
						aria-hidden="true"
						aria-labelledby="exampleModalToggleLabe"
						tabindex="-1"
					>
						<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content">
								<div class="modal-header">
									<button
										type="button"
										class="btn-close"
										data-bs-dismiss="modal"
									>
										<span class="visually-hidden">Close</span>
									</button>
								</div>
								<div class="modal-body">
									<span class="icon-success">
										<span class="visually-hidden">Success</span>
									</span>
									<h3 style={{ textAlign: "center", margin: "1rem" }}>
										Une félicitation par Mail a éte envoyé aux candidates
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
