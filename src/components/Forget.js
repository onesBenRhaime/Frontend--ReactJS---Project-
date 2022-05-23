import React, { Component } from "react";
import logo from "../components/Admin/img/logo.png";
export default class Forget extends Component {
	render() {
		return (
			<div>
				<div class="hold-transition login-page">
					<div class="login-box">
						<div className="card">
							<p className="brand-link">
								<img src={logo} height="50px" width="100px" alt="img" />
							</p>
							<div className="card-body login-card-body">
								<h6 className="login-box-msg">Mot de passe Oublié</h6>
								<form>
									<div className="input-group ">
										<input
											type="email"
											className="form-control"
											placeholder="Email"
										/>
										<div className="input-group-append">
											<div className="input-group-text">
												<span className="fas fa-envelope" />
											</div>
										</div>
									</div>
								</form>
								<div className="social-auth-links text-center mb-3">
									<button className="btn btn-block btn-primary">Envoyer</button>
								</div>
							</div>
							{/* /.login-card-body */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
