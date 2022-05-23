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

	const { authenticated } = session;

	return (
		<div>
			<nav className="main-header navbar navbar-expand navbar-white navbar-light">
				{/* Left navbar links */}{" "}
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" data-widget="pushmenu" href="index.html">
							<i className="fas fa-bars" />
						</a>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<Link to="/dashboard" className="nav-link">
							Acceuil
						</Link>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<Link to="/Contact" className="nav-link">
							<p>Contact</p>
						</Link>
					</li>
				</ul>
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
				{/* 
						<li className="nav-item d-none d-sm-inline-block ">
							<div class="dropdown">
								<button
									class="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
								>
									ones ben Rhaime{" "}
								</button>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
									<li>
										<div
											onClick={() => logoutHandler()}
											className="dropdown-item"
										>
											<p>logout</p>
										</div>
									</li>
								</ul>
							</div>
						</li> */}
				{/* Right navbar links 
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						
						<li className="nav-item dropdown">
							<div className="user-panel" data-toggle="dropdown">
								<div className="info">
								
									<p onClick={() => logoutHandler()} className="nav-link">
										ones ben Rhaime{" "}
									</p>
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
				</ul>*/}
			</nav>
		</div>
	);
}
