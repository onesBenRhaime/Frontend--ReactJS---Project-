import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/action/candidatAction";
import Logo from "../logoP.png";

export default function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logout(navigate));
	};

	const session = useSelector((state) => state.session);
	const { authenticated } = session;

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<img src={Logo} alt="" width={70} height={70} />
						<pre></pre>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/candidat">
									Acceuil
								</Link>
							</li>

							{authenticated && (
								<li className="nav-item">
									<Link className="nav-link " to="/candidat/mesTests">
										Mes Test
									</Link>
								</li>
							)}
							{authenticated && (
								<li className="nav-item">
									<Link className="nav-link" to="/candidat/mesResultat">
										Resultat
									</Link>
								</li>
							)}
							{authenticated && (
								<li>
									<div onClick={() => logoutHandler()} className="nav-link">
										Déconnacter
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
