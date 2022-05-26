import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import HomeNav from "./HomeNav";
import odc from "./ODC-1.svg";
// import "./HomeCss.css";
export default function Home() {
	return (
		<div>
			<HomeNav />

			<section
				className="login-page"
				style={{ paddingBottom: "100px", display: "block" }}
			>
				<div
					className="wrap"
					style={{
						maxWidth: "1140px",
						marginLeft: "auto",
						marginLight: " auto",
						paddingLeft: "20px",
						paddingLight: "20px",
					}}
				>
					<div className="intro cfx">
						<h1>Site de la marque Orange</h1>
						<h3 style={{ lineHeight: "2.6rem", fontWeight: "700" }}>
							A la recherche d'images, de logos ou tout simplement d'inspiration
							sur la marque Orange ? Vous êtes au bon endroit !
						</h3>
					</div>
					<div className="panels cfx" style={{ width: " 100%" }}>
						<div className="panel" style={{ width: "50%", float: "left" }}>
							<div
								className="panel__inr"
								style={{ backgroundColor: "white", padding: "40px" }}
							>
								<h3 className="heading--orange" style={{ color: " #f16e00" }}>
									Vous avez déjà un compte ?
								</h3>
								<form
									action="/fr/login/?ReturnUrl=%2ffr%2f"
									encType="multipart/form-data"
									id="#loginForm"
									method="post"
									onsubmit="onSubmitFunction()"
									style={{ margin: " 40px auto" }}
								>
									<input
										name="__RequestVerificationToken"
										type="hidden"
										defaultValue="iz-o3aQ19e9CuP_AToI_XA4-FQeHfqTinAdTczI2WM0-iQJJYTZUzi6OgHbRvReCRi-D5FCD3y3KU8r4CGgM--x9AjI1"
									/>
									<input
										id="ReturnUrl"
										name="ReturnUrl"
										type="hidden"
										defaultValue="/fr/"
									/>
									<input id="BackTo" name="BackTo" type="hidden" defaultValue />
									<input
										id="IsSSO"
										name="IsSSO"
										type="hidden"
										defaultValue="False"
									/>{" "}
									<h3>Oui, sur le réseau interne</h3>
									<a className="btn btn--orange" href="/callback/authorize">
										Connexion automatique
									</a>{" "}
									<h3>Oui, avec un accès externe</h3>
									<fieldset
										style={{ marginTop: " 20px", marginBottom: " 20px" }}
									>
										<div className="form-row  cfx">
											<label htmlFor="Username">
												Adresse e-mail<span className="req-star"> *</span>
											</label>
											<input
												id="Username"
												name="Username"
												type="text"
												defaultValue
											/>
										</div>
										<div
											className="form-row  cfx"
											style={{ marginBottom: "20px" }}
										>
											<label htmlFor="Password">
												Mot de passe<span className="req-star"> *</span>
											</label>
											<input id="Password" name="Password" type="password" />
											<a href="http://brand.orange.com/fr/forgotten-password/">
												Mot de passe&nbsp;oublié ?
											</a>
										</div>
										<div className="form-row">
											<input
												className="btn btn--orange"
												id="btnSubmit"
												type="submit"
												name="Send"
												defaultValue="Connexion"
											/>
										</div>
									</fieldset>
									<input
										name="ufprt"
										type="hidden"
										defaultValue="2B4459259127A3B8A574A2C49B40AF29841F48B9AFE4088D54D7DB73263FF9AB702DF8ED8F49AA8A87F55BC4E1FDCA4001939E5B14F2CD6A7F498E93252BC63A301A41132F97E5D31ED714844B8E2FFE1B6D7E05610F192B0BD21C657C7EE06AF633DD919D912F585A6E9BFA37FD35199133DA09"
									/>
								</form>
							</div>
						</div>
						<div className="panel">
							<div className="panel__inr">
								<h3 className="heading--orange">Première visite ?</h3>
								<p>
									Complétez notre formulaire d'inscription pour accéder au site.
									Interne Orange ? Vous pourrez y accéder immédiatement et avec
									la connexion automatique vous n'aurez plus besoin de mot de
									passe pour vos prochaines visites ! Si vous êtes une agence ou
									un partenaire, indiquez-nous votre contact interne qui
									validera votre accès.
								</p>
								<a
									className="btn btn--border-black active"
									href="http://brand.orange.com/fr/register/"
								>
									Inscription
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
