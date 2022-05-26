import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import HomeNav from "./HomeNav";

export default function ForgetPsw() {
	const [email, setEmail] = useState("");
	const [timer, setTimer] = useState(false);
	const [message, setmessage] = useState("");

	// const { email } = user;
	const navigate = useNavigate();
	const ForgotPsw = (e) => {
		e.preventDefault();
		console.log("/****forgot*****/");
		if (email === "") {
			setmessage("Saisire Votre Email ");
			setTimer(true);
			setTimeout(() => {
				setTimer(false);
			}, 3000);
		} else {
			axios
				.post(`http://localhost:3000/api/user/forgetPssword`, {
					email,
				})
				.then((response) => {
					console.log("reponse api : " + response.data.message);
					setmessage(response.data.message);
					setTimer(true);
					setTimeout(() => {
						setTimer(false);
					}, 3000);
					// alert(err.response.data.message); setTime
					navigate("/home");
				})
				.catch((err) => {
					console.log(err.response.data.message);
					setmessage(err.response.data.message);
					setTimer(true);
					setTimeout(() => {
						setTimer(false);
					}, 3000);
				});
		}
	};

	return (
		<div>
			<HomeNav />

			<section className="login-page" style={{ display: "block" }}>
				<div
					className="warp"
					style={{
						maxWidth: "1140px",
						marginLeft: "auto",
						marginLight: " 50px",
						paddingLeft: "40px",
						paddingLight: "20px",
						marginRight: "13rem",
					}}
				>
					<div
						class="intro"
						style={{
							paddingTop: "5rem",
							paddingRight: " 50px",
							paddingBottom: "50px",
							paddingLeft: "0.1rem",
						}}
					>
						<h1>Mot de passe réinitialisé</h1>
					</div>
					{message && timer && (
						<p class="alert alert-danger" role="alert">
							<span class="alert-icon">
								<span class="visually-hidden">Error</span>
							</span>
							<p>{message}</p>
						</p>
					)}
					<div className="panels cfx" style={{ width: " 100%" }}>
						<div
							className="panel"
							style={{ width: "50%", float: "left", paddingRight: " 10px" }}
						>
							<div
								className="panel__inr"
								style={{
									backgroundColor: "white",
									padding: "40px",
								}}
							>
								<form onSubmit={ForgotPsw}>
									<label className="form-label">E-mail</label>
									<span class="req-star"> *</span>
									<input
										className="form-control"
										type="email"
										name="email"
										onChange={(e) => setEmail(e.target.value)}
										value={email}
									/>
									<br />
									<button type="submit" className="btn btn-primary">
										Réinitialiser le mot de passe
									</button>{" "}
									<br />
								</form>{" "}
							</div>
						</div>

						<div className="panel" style={{ width: "50%", float: " left" }}>
							<div
								className="panel__inr"
								style={{ backgroundColor: "white", padding: "40px" }}
							>
								<h3 style={{ color: "#ff7900" }}> Mot de passe réinitialisé</h3>
								<p>
									Veuillez saisir votre adresse e-mail et nous vous enverrons
									des instructions pour réinitialiser votre mot de passe.{" "}
								</p>
								<p style={{ color: "#ff7900" }}>Première visite ?</p>
								<p>
									Complétez un court formulaire d'inscription pour créer votre
									compte et accéder aux directives et aux outils Orange Test.{" "}
								</p>

								<Link to="/register" type="button" class="btn btn-secondary">
									Inscription
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
