import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import axios from "axios";
import { CircularProgress } from "@material-ui/core";

export default function ListeCandidat() {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};
	const [lisEmail, setLisEmail] = useState([]);
	const [loading, setLoading] = useState(true);
	const [listCandidt, setListCandidt] = useState([]);
	useEffect(() => {
		const getAllCandidatSession = async () => {
			const idSession = "628ad14302be4a2d07eb68a2";
			await axios
				.get(`http://localhost:3000/api/candidat/getBySession?id=${idSession}`)
				.then((response) => {
					console.log("/*****Export data from  excel ******/", response);
					setListCandidt(response.data);
					console.log("/*****Export data from  excel ******/", listCandidt);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err.message);
					setLoading(false);
				});
		};
		getAllCandidatSession();
	}, []);
	const ListeInviter = (item) => {
		const lc = listCandidt.find((lc, i) => lc._id === item._id); //cheacked
		if (lc) {
			console.log(lc);
			const ls = listCandidt.filter((lc) => lc._id !== item.id);
			console.log(ls);
			setLisEmail(ls.email);
		} else {
			setLisEmail([...setLisEmail, item.email]);
			console.log(lisEmail);
		}
	};
	const addAcount = async () => {
		await axios
			.post(`http://localhost:3000/api/candidat/addAccount`, lisEmail)
			.then((response) => {
				console.log("/*****Add Account  ******/", response.message);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<Navbar />
			<SideBar />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					<section className="content">
						<div className="row">
							<div className="col-9">
								<h2
									style={{
										color: "#0099CC",
										marginLeft: "10px",
										marginTop: "30px",
									}}
								>
									Liste des Candidatures
								</h2>
							</div>
							<div
								className="col-3"
								style={{
									marginTop: "30px",
								}}
							>
								<Button
									type="submit"
									class="btn btn-primary "
									onClick={addAcount}
								>
									Génerer des comptes temporelle
								</Button>
							</div>
						</div>

						<div
							style={{
								margin: "30px",
							}}
						>
							{loading ? (
								<div class="position-relative" style={{ marginTop: "15rem" }}>
									<div class="position-absolute top-50 start-50 translate-middle">
										<div
											class="spinner-border  spinner-border-lg"
											role="status"
										>
											<span class="visually-hidden">
												<CircularProgress />
											</span>
										</div>
									</div>
								</div>
							) : (
								<table className="table table-hover ">
									<thead>
										<tr>
											<th scope="col">
												<input type="checkbox" />
											</th>
											<th scope="col">Nom</th>
											<th scope="col">Prenom</th>
											<th scope="col">E-mail</th>
											<th scope="col">Télephone</th>
											<th scope="col">Cv</th>
											<th scope="col">Profile</th>
										</tr>
									</thead>
									<tbody>
										{listCandidt.map((item, index) => {
											return (
												<tr key={index}>
													<th scope="row">
														<input
															type="checkbox"
															onChange={() => ListeInviter(item)}
														/>
													</th>
													<td>{item.nom}</td>
													<td>{item.prenom}</td>
													<td>{item.email}</td>
													<td>{item.tel}</td>

													<td
														data-bs-target="#lectureCv"
														data-bs-toggle="modal"
														onClick={() => openInNewTab(item.cv)}
													>
														Cv Candidat
													</td>

													<td>{item.profil}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							)}
						</div>
						<div className=" position-relative ">
							<div className="col-3 position-absolute top-50 start-100 translate-middle">
								<Link
									to="/session/Tester"
									type="button"
									class="btn btn-primary position-relative"
								>
									Suivant
								</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
