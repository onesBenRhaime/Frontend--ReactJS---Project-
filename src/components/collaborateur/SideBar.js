import React from "react";
import logo from "../img/logoAdmin.PNG";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SideBar() {
	const session = useSelector((state) => state.session);
	const { user } = session.user;
	// console.log(user);
	return (
		<div>
			<aside
				className="main-sidebar sidebar-dark-primary "
				style={{ backgroundColor: "#000000" }}
			>
				{/* Brand Logo */}
				<div className="brand-link">
					<img src={logo} height="100px" width="200px" alt="img" />
				</div>
				{/* Sidebar */}
				<div className="sidebar">
					{/* Sidebar user panel (optional) */}
					<div className="user-panel mt-3">
						<h2 style={{ color: "white" }}>Orange Test</h2>
						<p></p>
					</div>
					{/* Sidebar Menu */}
					<nav className="mt-2">
						<ul
							className="nav nav-pills nav-sidebar flex-column"
							data-widget="treeview"
							role="menu"
							data-accordion="false"
						>
							<li className="nav-item menu-open ">
								<Link to="/dashboard/collaborateur" className="nav-link">
									<i className=" nav-icon fas fa-university" />
									<h6>Acceuil</h6>
								</Link>
							</li>
							<li className="nav-item menu-open">
								<Link to="/ProfileCollaborateur" className="nav-link">
									<i className=" nav-icon fas fa-user" />
									<h6>Profile</h6>
								</Link>
							</li>
							<li className=" nav-item has-treeview ">
								<div
									className="nav-link "
									style={{ color: "white", backgroundColor: "#E67E22" }}
								>
									<i className="nav-icon fas fa-users" />
									<p>
										{" "}
										Gerer Candidat
										<i className="right fas fa-angle-left" />
									</p>
								</div>
								<ul className="nav nav-treeview">
									<li className="nav-link">
										<Link to="/manage/candidates/ajouter" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<h6>Ajouter</h6>
										</Link>
									</li>
									<li className="nav-link">
										<Link to="/manage/candidates/lister" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<h6>Lister</h6>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview ">
								<div
									className="nav-link"
									style={{ color: "white", backgroundColor: "#E67E22" }}
								>
									<i className="nav-icon fas fa-edit" />
									<p>
										Gerer Tests
										<i className="right fas fa-angle-left" />
									</p>
								</div>
								<ul className="nav nav-treeview">
									<li className="nav-link">
										<Link to="/manage/test/Ajouter" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<h6>Affecter </h6>
										</Link>
									</li>
									<li className="nav-link">
										<Link to="/manage/test/Ajouter" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<h6>Ajouter</h6>
										</Link>
									</li>
									<li className="nav-link">
										<Link to="/manage/test/Afficher" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<h6>Lister</h6>
										</Link>
									</li>
								</ul>
							</li>
							{/** Manage Session  */}

							<li className="nav-item has-treeview menu-open">
								<p
									className="nav-link"
									style={{ color: "white", backgroundColor: "#E67E22" }}
								>
									<i className="nav-icon fas fa-edit" />
									<p>
										Gerer Session
										<i className="right fas fa-angle-left" />
									</p>
								</p>
								<ul className="nav nav-treeview">
									<li className="nav-link">
										<Link to="/session/start" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<h6>Commancer </h6>
										</Link>
									</li>
									<li className="nav-link">
										<Link to="/session/resultat" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<h6>Gerer les Resultat </h6>
										</Link>
									</li>
									<li className="nav-link">
										<Link
											to="/session/ListePreselectionner"
											className="nav-link"
										>
											<i className="far fa-circle nav-icon" />
											<h6>Appeler </h6>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview ">
								<Link
									to="/session/manage"
									className="nav-link"
									style={{ color: "white", backgroundColor: "#E67E22" }}
								>
									<i className="nav-icon fas fa-edit" />
									<p>Gerer Session</p>
								</Link>
							</li>
						</ul>
					</nav>
					{/* /.sidebar-menu */}
				</div>
				{/* /.sidebar */}
			</aside>
		</div>
	);
}
