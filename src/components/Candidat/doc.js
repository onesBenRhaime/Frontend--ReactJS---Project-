import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
export default function MesTests() {
	const session = useSelector((state) => state.session);
	const { candidat } = session.user;
	const [data, setData] = useState("");
	const [cardTests, setCardTests] = useState("");
	console.log("candidat ", candidat);
	console.log("/**Candidat Connecter ***/", candidat.email);
	//	console.log({ session });
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
					
					console.log("/***** List Tests By Candidats ******/", listtests);
					console.log("/***** Nb Tests  ******/", listtests.length);
					console.log("/***** test 1 ******/", listtests[0].technologie);

					// //  const { error } = data;
					// // if (error) {
					// // 	console.log(error);
					// // } else {
					// // 	//	console.log(data);
					// // 	setData(data);
					// // 	console.log(data);
					// // 	console.log("/***** List Tests ******/", data.tests);
					// // 	//const cardTests = data.tests;
					// // 	// setCardTests(cardTests);
					// // 	// console.log(cardTests);
					// // 	//	console.log("/*****card Tests ******/", cardTests);
					// // }
				})
				.catch((err) => {
					console.log(err.message);
				});
		};
		getTestByCandidat();
		// const getTestByCandidat = async () => {
		// 	await axios
		// 		.get(`http://localhost:3000/api/test/getTestByCandidat`, {
		// 			candidat: candidat.email,
		// 		})
		// 		.then((response) => {
		// 			const { data } = response;
		// 			console.log("/**reponse api**/: ", data);
		// 			const { error } = data;
		// 			if (error) {
		// 				console.log(error);
		// 			} else {
		// 				//	console.log(data);
		// 				setData(data);
		// 				console.log(data);
		// 				console.log("/***** List Tests ******/", data.tests);
		// 				//const cardTests = data.tests;
		// 				// setCardTests(cardTests);
		// 				// console.log(cardTests);
		// 				//	console.log("/*****card Tests ******/", cardTests);
		// 			}
		// 		});
		// };
		// // const StartTest = async () => {
		// // 	await axios
		// // 		.get(`http://localhost:3000/api/test/startTest`, {
		// // 			candidat: candidat.email,
		// // 		})
		// // 		.then((response) => {
		// // 			const { data } = response;
		// // 			console.log("/**reponse api**/: ", data);
		// // 			const { error } = data;
		// // 			if (error) {
		// // 				console.log(error);
		// // 			} else {
		// // 				//	console.log(data);
		// // 				setData(data);
		// // 				console.log(data);
		// // 				console.log("/***** List Tests ******/", data.tests);
		// // 				//const cardTests = data.tests;
		// // 				// setCardTests(cardTests);
		// // 				// console.log(cardTests);
		// // 				//	console.log("/*****card Tests ******/", cardTests);
		// // 			}
		// // 		});
		// // };
		// /*getTestByCandidat();
		// StartTest();*/
	}, [candidat.email]);
	return (
		<div>
			<Navbar />
			<section class="container-sm">
				<br />
				<br />
				<br />
				<br />

				<h1 style={{ textAlign: "center" }}>
					Ces tests seront disponible le
					{/* {data.date.date} à {data.time.time} */}
				</h1>
				<br />
				<br />
				<br />
				<br />

				<div className="row">
					<div class="col-sm-6">
						<div class="card">
							<div class="card-body">
								<h4 class="title">
									Évaluation en
									{/* {data.tests[0].technologie.toUpperCase()} */}
								</h4>
								<p class="card-text" style={{ fontSize: 20 }}>
									{" "}
									<ion-icon name="help-circle-outline"></ion-icon> Vous avez 15
									questions à choix multiples
								</p>
								<p class="card-text" style={{ fontSize: 20 }}>
									{" "}
									<ion-icon name="alarm-outline"></ion-icon> 1 minute par
									question
								</p>
								<Link to="/candidat/startTest" class="btn btn-primary">
									Commancer
								</Link>
							</div>
						</div>
					</div>

					<div class="col-sm-6">
						<div class="card">
							<div class="card-body">
								<h4 class="title">Évaluation en</h4>
								<p class="card-text" style={{ fontSize: 20 }}>
									{" "}
									<ion-icon name="help-circle-outline"></ion-icon> Vous avvez 15
									questions à choix multiples
								</p>
								<p class="card-text" style={{ fontSize: 20 }}>
									{" "}
									<ion-icon name="alarm-outline"></ion-icon> 1 minute par
									question
								</p>
								<Link to="/candidat/startTest" class="btn btn-primary">
									Commancer
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div class="col-sm-6">
						<div className="card">
							<div class="card-body">
								<h4 class="title">Évaluation en</h4>
								<p class="card-text" style={{ fontSize: 20 }}>
									{" "}
									<ion-icon name="help-circle-outline"></ion-icon> Vous avvez 10
									questions à choix multiples
								</p>
								<p class="card-text" style={{ fontSize: 20 }}>
									{" "}
									<ion-icon name="alarm-outline"></ion-icon> 1 minute par
									question
								</p>
								<Link to="/candidat/startTest" class="btn btn-primary">
									Commancer
								</Link>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card">
							<div class="card-body">
								<h4 class="title">Évaluation en</h4>
								<p class="card-text" style={{ fontSize: 20 }}>
									{" "}
									<ion-icon name="help-circle-outline"></ion-icon> Vous avvez 7
									questions à choix multiples
								</p>
								<p class="card-text" style={{ fontSize: 20 }}>
									{" "}
									<ion-icon name="alarm-outline"></ion-icon> 1 minute par
									question
								</p>
								<Link to="/candidat/startTest" class="btn btn-primary">
									Commancer
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
