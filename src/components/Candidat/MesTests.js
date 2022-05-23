import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function MesTests() {
	const session = useSelector((state) => state.session);
	const { candidat } = session.user;
	const [dataTest, setdataTest] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const [messageTest, setMessageTest] = useState({
		testStart: false,
		message: "",
	});

	console.log("candidat ", candidat);
	console.log("/***Candidat Connecter ***/", candidat.email);

	useEffect(() => {
		const getTestByCandidat = async () => {
			await axios
				.get(`http://localhost:3000/api/test/getAllTest`)
				.then((response) => {
					const { data } = response;
					var listtests = [];
					for (var elem of data) {
						if (elem.candidat === candidat.email) {
							listtests.push(elem);
						}
					}
					setdataTest(listtests);
					console.log(listtests);
					console.log("/***** List Tests By Candidats ******/", listtests);
					console.log("/***** Nb Tests  ******/", listtests.length);
					console.log("/***** test 1 ******/", listtests[0].technologie);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err.message);
					setLoading(false);
				});
		};
		getTestByCandidat();
	}, [candidat.email]);

	const startTest = (id) => {
		axios
			.get(`http://localhost:3000/api/test/startTest?email=${candidat.email}`)
			.then((response) => {
				console.log(response);
				if (response.data.testStart) {
					navigate("/candidat/startTest/" + id + "/1");
				} else {
					// alert(response.message);
					setMessageTest(response.data);
				}
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	return (
		<div>
			<Navbar />
			{loading ? (
				<div class="position-relative" style={{ marginTop: "20rem" }}>
					<div class="position-absolute top-50 start-50 translate-middle">
						<div class="spinner-border  spinner-border-lg" role="status">
							<span class="visually-hidden">
								<CircularProgress />
							</span>
						</div>
					</div>
				</div>
			) : (
				<section class="container-sm">
					<br />
					<br />
					<br />
					<br />

					<h1 style={{ textAlign: "center" }}>
						Ces tests seront disponible le {dataTest[0].date} à{" "}
						{dataTest[0].time}
					</h1>
					<br />
					<br />
					{messageTest.message && messageTest.testStart === false && (
						<div class="alert alert-danger" role="alert">
							<span class="alert-icon">
								<span class="visually-hidden">Error</span>
							</span>
							<p>{messageTest.message}</p>
						</div>
					)}
					<br />
					<br />
					{/* {dataTest.map()} */}
					<div className="row">
						{dataTest.map((item, index) => {
							return (
								<div class="col-sm-6" key={index}>
									<div class="card">
										<div class="card-body">
											<h4 class="title">
												Évaluation en
												{item.technologie.toUpperCase()}
											</h4>
											<p class="card-text" style={{ fontSize: 20 }}>
												{" "}
												<ion-icon name="help-circle-outline"></ion-icon> Vous
												avez {item.nbQuestion} questions à choix multiples
											</p>
											<p class="card-text" style={{ fontSize: 20 }}>
												{" "}
												<ion-icon name="alarm-outline"></ion-icon> {item.dure}{" "}
											</p>
											<button
												onClick={() => startTest(item._id)}
												class="btn btn-primary"
											>
												Commancer
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			)}
		</div>
	);
}
