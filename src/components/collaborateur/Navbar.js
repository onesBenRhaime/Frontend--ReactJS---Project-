import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/action/userActions";
export default function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logout(navigate));
	};

	const session = useSelector((state) => state.session);
	console.log(session);
	const { authenticated } = session;
	/*console.log(user.user.nom);*/

	return (
		<div>
			<nav className="main-header navbar navbar-expand navbar-white navbar-light">
				{/* Left navbar links */}
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" data-widget="pushmenu" href="index.html">
							<i className="fas fa-bars" />
						</a>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<Link to="/dashboard/collaborateur" className="nav-link">
							Acceuil
						</Link>
					</li>
				</ul>
				{/* Right navbar links */}
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						{/* Dropdown Menu */}
						<li className="nav-item dropdown">
							<div className="user-panel " data-toggle="dropdown" href="o">
								<div className="info">
									{/*	{user.user.nom} {user.user.prenom}*/}
									ones ben Rhaime
								</div>
							</div>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
								<div className="dropdown-item">
									<ul>
										{authenticated && (
											<li className="nav-item d-none d-sm-inline-block">
												<div
													onClick={() => logoutHandler()}
													className="nav-link"
												>
													<p>logout</p>
												</div>
											</li>
										)}
									</ul>
								</div>
							</div>
						</li>{" "}
					</li>
				</ul>
			</nav>
		</div>
	);
}
