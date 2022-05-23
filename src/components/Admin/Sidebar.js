import React from "react";
import logo from "./img/logoAdmin.PNG";
import { Link } from "react-router-dom";

export default function Menu() {
	// console.log(user);
	return (
		<div>
			<aside
				className="main-sidebar sidebar-dark-primary elevation-4 "
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
						<h1 style={{ color: "white" }}>Orange Test</h1>
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
							<li className="nav-item ">
								<Link to="/dashboard" className="nav-link">
									<i className=" nav-icon fas fa-university" />
									<h6>Acceuil</h6>
								</Link>
							</li>
							<li className="nav-item ">
								<Link to="/ProfileAdmin" className="nav-link">
									<i className=" nav-icon fas fa-user" />
									<h6>Profile</h6>
								</Link>
							</li>
							<li className=" nav-item has-treeview menu-open">
								<div
									className="nav-link "
									style={{ color: "white", backgroundColor: "#E67E22" }}
								>
									<i className="nav-icon fas fa-users" />
									Gérer Collaborateur
									{/* <i className="right fas fa-angle-left" />  */}
								</div>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<Link to="/AddCollaborateur" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<h6>Ajouter </h6>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/ListeCollaborateur" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<h6>Lister</h6>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview menu-open">
								<div
									className="nav-link"
									style={{ color: "white", backgroundColor: "#E67E22" }}
								>
									<i className="nav-icon fas fa-edit" />
									Gérer Questions
									{/* <i className="right fas fa-angle-left" /> */}
								</div>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<Link to="/AddQuestion" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<h6>Ajouter </h6>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/ListeQuestion" className="nav-link">
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
									Gérer Test
									{/* <i className="right fas fa-angle-left" /> */}
								</div>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<Link to="" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<h6>Ajouter </h6>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<h6>Lister</h6>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview ">
								<Link
									to="/session"
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
