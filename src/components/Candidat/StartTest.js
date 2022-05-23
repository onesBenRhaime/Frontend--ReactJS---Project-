import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import Navbar from "./Navbar";
export default function StartTest() {
	const session = useSelector((state) => state.session);
	const { candidat } = session.user;
	const time = new Date(new Date().getTime() + 1000 * 60 * 10).getTime();
	const [ctime, setCtime] = useState(time);

	// const UpdateTime = () => {
	// 	time = new Date().toLocaleTimeString();
	// 	setCtime(time);
	// };
	// setInterval(UpdateTime, 1000);
	const navigate = useNavigate();
	const params = useParams();
	const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState([]);
	const [technologie, setTechnologies] = useState("");
	const [scoreQ, setScoreQ] = useState(0);
	const [scoreF, setScoreF] = useState();
	const [responces, setResponcese] = useState([]);
	const [check, setCheck] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setCtime(time - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [time]);

	const getReturnValues = (countDown) => {
		// calculate time left
		const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

		return { days, hours, minutes, seconds };
	};

	useEffect(() => {
		const getQTest = () => {
			axios
				.get(`http://localhost:3000/api/test/getQTest?id=${params.idTest}`)
				.then((response) => {
					console.log(response.data);
					setQuestions(response.data.questions);
					setTechnologies(response.data.technologie);
					setScoreQ(response.data.score);
				})
				.catch((err) => {
					console.log(err.message);
				});
		};
		getQTest();
	}, [params.idTest]);

	useEffect(() => {
		console.log(params.idQ);
		console.log(responces);
	}, [params.idQ]);

	const handleChange = (e) => {
		setCheck(e.target.id);
	};
	const next = () => {
		setResponcese([
			...responces,
			{
				idR: check,
				idQ: questions[params.idQ - 1]._id,
				scoreQ: questions[params.idQ - 1].score,
			},
		]);
		navigate(
			"/candidat/startTest/" + params.idTest + "/" + (parseInt(params.idQ) + 1)
		);
	};
	const submit = async () => {
		try {
			const res = responces;
			res.push({
				idR: check,
				idQ: questions[params.idQ - 1]._id,
				scoreQ: questions[params.idQ - 1].score,
			});
			const response = await axios.post(
				`http://localhost:3000/api/answer/SaveResponceByT`,
				{
					testid: params.idTest,
					candidatid: candidat._id,
					answerCand: res,
				}
			);
			console.log(response);
			navigate("/candidat/mesTests");
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		const getScore = async () => {
			try {
				const response = await axios.post(
					`http://localhost:3000/api/result/ResultByTest`,
					{
						testid: params.idTest,
						candidatid: candidat._id,
					}
				);
				setScoreF(response.data.result.scoreTest);
				//console.log(response.data.result.scoreTest);
				setLoading(false);
			} catch (error) {
				console.log(error.message);
				setLoading(false);
			}
		};
		getScore();
	}, [params.idTest]);
	return (
		<div>
			<Navbar />
			<br />
			<br />
			<section className="container-sm">
				<div class="p-3 mb-5 fw-bold bg-light">
					<div class="position-relative">
						<ul class="nav  ">
							<li class="nav-item">
								<p class="nav-item">Questionnaire {technologie}</p>
							</li>

							<li class="nav-pills ">
								<div class="position-absolute top-0 end-0">
									<p class="nav-link active">
										{getReturnValues(ctime).minutes}:
										{getReturnValues(ctime).seconds}
									</p>
								</div>
							</li>
						</ul>{" "}
					</div>
				</div>
				{/* /.card-header */}
				<div class="card ">
					<div class="card-header">
						<h3>
							{params.idQ}/{questions.length}
						</h3>
					</div>
					<div class="card-body">
						<div class="position-relative">
							<h3 class="title">{questions[params.idQ - 1]?.titre}</h3>
							{/* {questions[params.idQ - 1]?.alternatives.length} */}
							<h6 class="card-text p-4 ">
								{questions[params.idQ - 1]?.alternatives.map((item, index) => {
									return (
										<div className="form-check" key={index}>
											<input
												className="form-check-input"
												type="radio"
												name="option"
												id={item._id}
												checked={check === item._id}
												onChange={handleChange}
											/>

											<label className="form-check-label"> {item.option}</label>
										</div>
									);
								})}
							</h6>
							<div class="position-absolute bottom-0 end-0">
								{questions.length > params.idQ ? (
									<button class="btn btn-primary" onClick={next}>
										suivant
									</button>
								) : (
									<button
										class="btn btn-primary"
										data-bs-toggle="modal"
										data-bs-target="#staticBackdrop"
										onClick={submit}
									>
										Envoyer
									</button>
								)}
							</div>
							<pre></pre>
						</div>
					</div>
				</div>
				{/* /.card-body */}
			</section>
			{/* Model  */}

			<div
				class="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-body">
							{loading ? (
								<div class="position-relative" style={{ marginTop: "2rem" }}>
									<div class="position-absolute top-50 start-50 translate-middle">
										<div class="spinner-border text-primary" role="status">
											<span class="visually-hidden">Loading...</span>
										</div>
									</div>
								</div>
							) : (
								<h4
									className="justify-content-center"
									style={{ margin: "1rem" }}
								>
									Vous Avez Terminier le Tests D'evalution en {technologie}{" "}
									<br />
									Votre Score est {scoreF}
									<br />
									{/*
									Terminer Tous Vous Tester Puis Consulter votre resultat */}
								</h4>
							)}
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Fermer
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Model  */}
		</div>
	);
}
