import React, { useEffect, useState } from "react";
import Menu from "../Navbar";
import Header from "..//SideBar";
import { Link, useNavigate } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import axios from "axios";
import { useSelector } from "react-redux";
export default function MesSession() {
	const session = useSelector((state) => state.session);
	console.log(session);
	const [loading, setLoading] = useState(true);
	const [listSess, setlistSess] = useState([]);
	useEffect(() => {
		const getSession = async () => {
			console.log(session);
			const email = session.user.email;
			await axios
				.get(`http://localhost:3000/api/admin/getSessionByResp?email=${email}`)
				.then((response) => {
					console.log("/*****Session ******/", response);
					setlistSess(response.data);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err.message);
					setLoading(false);
				});
		};
		if (session.user?.email) {
			getSession();
		}
	}, [session.user.email]);
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper" style={{ backgroundColor: "white" }}>
					{/* Main content */}
					<section className="content">
						<div className="row">
							<div className="col-10">
								<h2
									style={{
										color: "#ff7900",
										marginLeft: "3rem",
										marginTop: "30px",
									}}
								>
									Liste Des Session
								</h2>
							</div>
						</div>
						{loading ? (
							<div class="position-relative" style={{ marginTop: "12rem" }}>
								<div class="position-absolute top-50 start-50 translate-middle">
									<div class="spinner-border  " role="status">
										<span class="visually-hidden">
											<CircularProgress />
										</span>
									</div>
								</div>
							</div>
						) : (
							<div className="row">
								{listSess.map((item, index) => {
									return (
										<div class="col-sm-5" key={index}>
											<div class="card">
												<div class="card-body">
													<h4 class="title">{item.nom}</h4>
													<p class="card-text" style={{ fontSize: 20 }}>
														<ManageAccountsIcon />
														Responsable : {item.responsable}
													</p>
													<p class="card-text" style={{ fontSize: 20 }}>
														<CalendarTodayIcon /> date Début : {item.dateD}
													</p>
													<p class="card-text" style={{ fontSize: 20 }}>
														<CalendarTodayIcon /> date Fin
														{item.dateF}
													</p>
													<Link class="btn btn-primary" to="/session/start">
														Commancer
													</Link>{" "}
													<Link class="btn btn-primary" to="/session/resultat">
														Resultat
													</Link>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						)}
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
