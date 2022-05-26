import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
import HomeNav from "./HomeNav";
import odc from "./ODC-1.svg";
import "./HomeCss.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { sessionService } from "redux-react-session";
export default function Home() {
	const [user, setUser] = useState({
		password: "",
		email: "",
	});
	const [timer, setTimer] = useState(false);
	const [message, setmessage] = useState("");
	const { email, password } = user;
	const navigate = useNavigate();
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const Login = async (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:3000/api/user/login`, {
				email,
				password,
			})
			.then((response) => {
				const token = response.data;
				localStorage.setItem("jwt", token);
				const decoded = jwt_decode(token);
				console.log(decoded);

				//decodage
				sessionService.saveSession(token).then(() => {
					sessionService.saveUser(decoded).then(() => {
						if (decoded.role.toLowerCase() === "collaborateur") {
							navigate("/dashboard/collaborateur");
						} else if (decoded.role.toLowerCase() === "admin") {
							navigate("/dashboard");
						} else {
							navigate("/home");
						}
					});
				});
			})
			.catch((err) => {
				console.log(err.response.data.message);
				setmessage(err.response.data.message);
				setTimer(true);
				setTimeout(() => {
					setTimer(false);
				}, 3000);
			});
	};
	return (
		<div>
			<HomeNav />
			{/* <div className="row">
				<div className="col-6">
					<div class="d-flex flex-column ">
						<div class="p-5">
							{" "}
							<img
								id="obs"
								src={odc}
								alt=""
								width={"50%"}
								height={"30%"}
								aria-hidden="true"
								loading="lazy"
							/>
							<br />{" "}
							<h3>
								Vous avez une Session de Recrutement pour que ce soit une
								évènement ,une Formation un Stage d'été ou bien de Fin des étude
								et vous avez obliger de passer son Candidatures a un test
								technique ou a un entretien de présélection , et vous perte plus
								de temps pour recruter Vous êtes au bon endroit ! Pour
								Automatiser tout ses processus de recrutement{" "}
							</h3> 
						</div>
					</div>
				</div>
			</div> */}{" "}
			<section
				className="login-page"
				style={{ display: "block", minHeight: "100vh" }}
			>
				<div
					className="warp"
					style={{
						maxWidth: "1140px",
						// marginLeft: "auto",
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
						{" "}
						<img
							id="obs"
							src={odc}
							alt=""
							width={"50%"}
							height={"30%"}
							aria-hidden="true"
							loading="lazy"
						/>
						<br />
						<h3 style={{ lineHeight: "2.6rem", fontWeight: "700" }}>
							Vous êtes au bon endroit ! Pour Automatiser tout ses processus de
							recrutement
						</h3>
					</div>{" "}
					{message && timer && (
						<p class="alert alert-danger" role="alert">
							<span class="alert-icon">
								<span class="visually-hidden">Error</span>
							</span>
							<p>{message}</p>
						</p>
					)}
					<div
						className="panels cfx"
						style={{ width: " 100%", display: "flex", flexWrap: "wrap" }}
					>
						<div
							className="panel"
							style={{
								width: "50%",
								marginRight: "10px",
								minWidth: "300px",
								flex: 1,
							}}
						>
							<div
								className="panel__inr"
								style={{ backgroundColor: "white", padding: "40px" }}
							>
								<h3 className="heading--orange" style={{ color: " #f16e00" }}>
									Vous avez déjà un compte ?
								</h3>
								<pre></pre>
								<form onSubmit={Login}>
									<div className="mb-3">
										<label className="form-label">Addresse E-mail</label>
										<input
											type="email"
											className="form-control"
											value={email}
											onChange={handleChange}
											name="email"
										/>
									</div>

									<div className="mb-3">
										<label className="form-label">Mot de passe</label>
										<input
											type="password"
											className="form-control"
											value={password}
											onChange={handleChange}
											name="password"
										/>
									</div>
									<Link to="/Forget">Mot de passe oublié ?</Link>
									<pre></pre>
									<button type="submit" className="btn btn-primary">
										Connecter
									</button>
								</form>
							</div>
						</div>
						{/* inscription */}
						<div
							className="panel"
							style={{ width: "50%", minWidth: 300, flex: 1 }}
						>
							<div
								className="panel__inr"
								style={{ backgroundColor: "white", padding: "40px" }}
							>
								<h3 style={{ color: "#ff7900" }}>Première visite ?</h3>
								<pre></pre>
								<p>
									Complétez notre formulaire d'inscription pour accéder au site.
									Interne Orange ? Vous pourrez y accéder immédiatement et avec
									la connexion automatique vous n'aurez plus besoin de mot de
									passe pour vos prochaines visites ! Si vous êtes une agence ou
									un partenaire, indiquez-nous votre contact interne qui
									validera votre accès.
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
