import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/action/candidatAction";
import cand from "../img/candidat.png";
import Navbar from "./Navbar";
import odc from "./ODC-1.svg";
export default function IndexCandidat() {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();

	// const { email, password } = data;
	const navigate = useNavigate();

	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	// useEffect(() => {
	// 	console.log(data);
	// }, [data]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			dispatch(login(data, navigate));
		} catch (e) {
			console.log(e);
			setMessage(e.message);
		}
	};
	const session = useSelector((state) => state.session);
	const { authenticated } = session;
	return (
		<div>
			<Navbar />

			<div className="row g-0">
				<div className="col-sm-1 col-md-7">
					<img src={cand} alt="" width="100%" />
				</div>
				<div className="col-12 col-md-4">
					<h1 style={{ marginTop: "5rem" }}>
						Bienvenue au <br />
					</h1>{" "}
					<img id="obs" src={odc} alt="" aria-hidden="true" loading="lazy" />
					<br /> <br />
					<h3 style={{ marginRight: "2rem" }}>Pour Tester vos compétences</h3>
					<div className="justify-content-center">
						<form className="p-3" onSubmit={handleSubmit}>
							{!authenticated && (
								<div className="mb-3">
									<label
										htmlFor="exampleDropdownFormEmail2"
										className="form-label"
									>
										Addresse E-mail
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										value={data.email}
										placeholder="email@example.com"
										onChange={handleChange}
										name="email"
									/>
								</div>
							)}
							{!authenticated && (
								<div className="mb-3">
									<label
										htmlFor="exampleDropdownFormPassword2"
										className="form-label"
									>
										Mot de passe
									</label>
									<input
										type="password"
										className="form-control"
										id="password"
										value={data.password}
										placeholder="Password"
										onChange={handleChange}
										name="password"
									/>
								</div>
							)}
							{!authenticated && (
								<div className="mb-3">
									<div className="form-check">
										<input
											type="checkbox"
											className="form-check-input"
											id="dropdownCheck2"
										/>
										<label
											className="form-check-label"
											htmlFor="dropdownCheck2"
										>
											Remember me
										</label>
									</div>
								</div>
							)}
							{!authenticated && (
								<button type="submit" className="btn btn-primary">
									Connecter
								</button>
							)}
						</form>
					</div>{" "}
					{authenticated && (
						<div className="col-md-12">
							<h2 className=" active">
								Nous avons invité a un test de préselection des Candidatures
							</h2>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
