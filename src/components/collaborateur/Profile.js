import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfile } from "../../redux/action/userActions";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Profile() {
	/** */
	const session = useSelector((state) => state.session);
	const { user } = session.user;
	console.log(user);
	/** */
	/** */

	const [data, setData] = useState({
		email: user.email,
		tel: "",
		adresse: "",
	});

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleEditProfile = async (e) => {
		e.preventDefault();
		dispatch(EditProfile(data));
		console.log("Updated");
	};
	/** */
	return (
		<div>
			<SideBar />
			<Navbar />
			<div className="wrapper">
				<div className="content-wrapper">
					{/* Content Header (Page header) */}
					<section className="content-header">
						<div className="container-fluid">
							<div className="row mb-2">
								<div className="col-sm-6">
									<h3>Profile </h3>
								</div>
							</div>
						</div>
						{/* /.container-fluid */}
					</section>

					{/* Main content */}
					<section className="content">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-3">
									{/* Profile Image */}
									<div className="card ">
										<div className="card-body box-profile">
											<div className="text-center">
												<img
													className="profile-user-img img-fluid img-circle"
													src="./img/user4-128x128.jpg"
													alt=""
												/>
											</div>
											<h3 className="profile-username text-center text-capitalize">
												{user.nom} {user.prenom}
											</h3>
											<p className="text-muted text-center text-capitalize">
												{user.profile}
											</p>
											<ul className="list-group list-group-unbordered mb-3">
												<li className="list-group-item">
													<b>E-mail</b>{" "}
													<p className="float-right"> {user.email}</p>
												</li>
												<li className="list-group-item">
													<b>Role</b> <p className="float-right">{user.role}</p>
												</li>
												<li className="list-group-item">
													<b>Téléphone</b>{" "}
													<p className="float-right">{user.tel}</p>
												</li>
												<li className="list-group-item">
													<b>Adresse</b>{" "}
													<p className="float-right">{user.adresse}</p>
												</li>
											</ul>

											<button
												data-bs-target="#pills-contact"
												className="btn btn-primary btn-block"
											>
												<b>Modifier</b>
											</button>
										</div>
										{/* /.card-body */}
									</div>
								</div>

								<div className="col-md-9">
									<div className="card">
										<br />
										<div className="card p-2">
											<ul
												className="nav nav-pills mb-3"
												id="pills-tab"
												role="tablist"
											>
												<li className="nav-item" role="presentation">
													<button
														className="nav-link active"
														id="pills-home-tab"
														data-bs-toggle="pill"
														data-bs-target="#pills-home"
														type="button"
														role="tab"
														aria-controls="pills-home"
														aria-selected="true"
													>
														Activité
													</button>
												</li>
												<li className="nav-item" role="presentation">
													<button
														className="nav-link"
														id="pills-profile-tab"
														data-bs-toggle="pill"
														data-bs-target="#pills-profile"
														type="button"
														role="tab"
														aria-controls="pills-profile"
														aria-selected="false"
													>
														Chronologie des activités
													</button>
												</li>
												<li className="nav-item" role="presentation">
													<button
														className="nav-link"
														id="pills-contact-tab"
														data-bs-toggle="pill"
														data-bs-target="#pills-contact"
														type="button"
														role="tab"
														aria-controls="pills-contact"
														aria-selected="false"
													>
														Réglages
													</button>
												</li>
											</ul>
										</div>
										<div className="card-body">
											<div className="tab-content" id="pills-tabContent">
												<div
													className="tab-pane fade show active"
													id="pills-home"
													role="tabpanel"
													aria-labelledby="pills-home-tab"
												>
													...
												</div>
												<div
													className="tab-pane fade"
													id="pills-profile"
													role="tabpanel"
													aria-labelledby="pills-profile-tab"
												>
													{/* The timeline */}
													<div className="timeline timeline-inverse">
														{/* timeline time label */}
														<div className="time-label">
															<span className="bg-danger">10 Feb. 2014</span>
														</div>
														{/* /.timeline-label */}
														{/* timeline item */}
														<div>
															<i className="fas fa-envelope bg-primary" />
															<div className="timeline-item">
																<span className="time">
																	<i className="far fa-clock" /> 12:05
																</span>
																<h3 className="timeline-header">
																	<a href="i">Support Team</a> sent you an email
																</h3>
																<div className="timeline-body">
																	Etsy doostang zoodles disqus groupon greplin
																	oooj voxy zoodles, weebly ning heekya handango
																	imeem plugg dopplr jibjab, movity jajah
																	plickers sifteo edmodo ifttt zimbra. Babblely
																	odeo kaboodle quora plaxo ideeli hulu weebly
																	balihoo...
																</div>
																<div className="timeline-footer">
																	<a
																		href="#"
																		className="btn btn-primary btn-sm"
																	>
																		Read more
																	</a>
																	<a href="#" className="btn btn-danger btn-sm">
																		Delete
																	</a>
																</div>
															</div>
														</div>
														{/* END timeline item */}
														{/* timeline item */}
														<div>
															<i className="fas fa-user bg-info" />
															<div className="timeline-item">
																<span className="time">
																	<i className="far fa-clock" /> 5 mins ago
																</span>
																<h3 className="timeline-header border-0">
																	<a href="#">Sarah Young</a> accepted your
																	friend request
																</h3>
															</div>
														</div>
														{/* END timeline item */}
														{/* timeline item */}
														<div>
															<i className="fas fa-comments bg-warning" />
															<div className="timeline-item">
																<span className="time">
																	<i className="far fa-clock" /> 27 mins ago
																</span>
																<h3 className="timeline-header">
																	<a href="#">Jay White</a> commented on your
																	post
																</h3>
																<div className="timeline-body">
																	Take me to your leader! Switzerland is small
																	and neutral! We are more like Germany,
																	ambitious and misunderstood!
																</div>
																<div className="timeline-footer">
																	<a
																		href="#"
																		className="btn btn-warning btn-flat btn-sm"
																	>
																		View comment
																	</a>
																</div>
															</div>
														</div>
														{/* END timeline item */}
														{/* timeline time label */}
														<div className="time-label">
															<span className="bg-success">3 Jan. 2014</span>
														</div>
														{/* /.timeline-label */}
														{/* timeline item */}

														{/* END timeline item */}
														<div>
															<i className="far fa-clock bg-gray" />
														</div>
													</div>
												</div>
												<div
													className="tab-pane fade"
													id="pills-contact"
													role="tabpanel"
													aria-labelledby="pills-contact-tab"
												>
													<div className="form-horizontal">
														<div className="form-group row">
															<label
																htmlFor="inputTel"
																className="col-sm-2 col-form-label"
															>
																Adresse
															</label>
															<div className="col-sm-6">
																<input
																	type="text"
																	className="form-control"
																	id="inputAdr"
																	placeholder="Adresse"
																	onChange={handleChange}
																/>
															</div>
														</div>

														<div className="form-group row">
															<label
																htmlFor="inputTel"
																className="col-sm-2 col-form-label"
															>
																Téléphone
															</label>
															<div className="col-sm-6">
																<input
																	type="text"
																	className="form-control"
																	id="inputTel"
																	placeholder="Telephone"
																	onChange={handleChange}
																/>
															</div>
														</div>

														<div className="form-group row">
															<div className="offset-sm-2 col-sm-10">
																<button
																	className="btn btn-danger"
																	onClick={handleEditProfile}
																>
																	Valider
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* /.col */}
							</div>
							{/* /.row */}
						</div>
						{/* /.container-fluid */}
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
