import React, { useState } from "react";
import { register } from "../redux/action/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
	const [data, setData] = useState({
		nom: "",
		prenom: "",
		email: "",
		password: "",
	});
	const dispatch = useDispatch();
	const { nom, prenom, email, password } = data;
	const navigate = useNavigate();
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(register(data, navigate));
	};
	return (
		<div className="row">
			<div className="col-sm-2" />
			<div className="col-sm-8">
				<br /> <br />
				<h2 className="text-muted text-center mb-5">Créer un compte</h2>
				<div className="card p-5 shadow">
					<form>
						<div className="form-group">
							<label htmlFor="name">Nom</label>
							<input
								className="form-control"
								type="name"
								name="nom"
								value={nom}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="name">Prenom</label>
							<input
								className="form-control"
								type="name"
								name="prenom"
								value={prenom}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								className="form-control"
								type="email"
								name="email"
								value={email}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								className="form-control"
								type="password"
								name="password"
								value={password}
								onChange={handleChange}
							/>
						</div>
						{/*{error ? <p className="text-danger">{error}</p> : null}*/}
						<div className="d-flex justify-content-center">
							<div className=" col-3">
								<button
									className="btn btn-block  btn-primary "
									style={{ backgroundColor: "#E67E22" }}
									onClick={handleSubmit}
								>
									Register
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="col-sm-2" />
		</div>
	);
};

export default Register;
