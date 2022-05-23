import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../components/Admin/img/logo.png";
import { login } from "../redux/action/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();

	const { email, password } = data;
	const navigate = useNavigate();
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(login(data, navigate));
	};
	console.log(data);
	return (
		<div>
			<div class="hold-transition login-page">
				<div class="login-box">
					<div className="card">
						<p className="brand-link">
							<img src={logo} height="50px" width="100px" alt="img" />
						</p>
						<div className="card-body login-card-body">
							<h1 className="login-box-msg">Connexion</h1>
							<form>
								<div className="input-group">
									<input
										type="email"
										className="form-control "
										placeholder="Email"
										required
										name="email"
										value={email}
										onChange={handleChange}
									/>
									<div className="input-group-append">
										<div className="input-group-text">
											<span className="fas fa-envelope" />
										</div>
									</div>
								</div>
								<br />
								<div className="input-group ">
									<input
										type="password"
										className="form-control"
										placeholder="Password"
										name="password"
										value={password}
										onChange={handleChange}
									/>
									<div className="input-group-append">
										<div className="input-group-text">
											<span className="fas fa-lock" />
										</div>
									</div>
								</div>
								{/* {error ? <p className="text-danger">{error}</p> : null} */}
								<div className="social-auth-links text-center mb-3">
									<button
										className="btn btn-block btn-primary"
										onClick={handleSubmit}
										style={{ backgroundColor: "#E67E22" }}
									>
										Connecter
									</button>
								</div>{" "}
								<div className="social-auth-links text-center mb-3">
									<Link to="/register">
										<button
											className="btn btn-block btn-primary "
											style={{ backgroundColor: "#E67E22" }}
										>
											Register
										</button>
									</Link>
								</div>{" "}
							</form>

							<p className="mb-1">
								<Link to="/forgetPsw">
									{" "}
									<p style={{ textDecoration: "black" }}>
										j'ai oublié mon mot de passe{" "}
									</p>
								</Link>
							</p>
						</div>
						{/* /.login-card-body */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
