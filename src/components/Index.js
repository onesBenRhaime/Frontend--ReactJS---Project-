import { Card, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, styled } from "@mui/system";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { login, register } from "../redux/action/userActions";
import { RestPsw } from "../redux/action/userActions";
import logoimg from "./img/logo.png";
import cand from "./img/Cand.png";
import { useDispatch } from "react-redux";

const theme = createTheme({
	status: {
		danger: "#e53e3e",
	},
	palette: {
		orange: {
			main: "#E67E22",
			contrastText: "#fff",
		},
	},
});

const FlexBox = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
}));

const JustifyBox = styled(FlexBox)(() => ({
	justifyContent: "center",
}));

const ContentBox = styled(Box)(() => ({
	height: "100%",
	width: "100%",
	padding: "20px", //all
	// marginTop: "80px",
	marginRight: "100px",
	position: "relative",
	background: "rgba(0, 0, 0, 0.01)",
}));

const StyleButton = styled(Button)(() => ({
	//all
	marginBlock: "30px",
}));

const IMG = styled("img")(() => ({
	width: "80%",
}));

const Logo = styled("img")(() => ({
	width: "40%",

	marginTop: "3rem",
}));

const JWTRoot = styled(JustifyBox)(() => ({
	background: "#1A2038",
	width: "100%",
	"& .card": {
		maxWidth: "100%",
		height: "20%",
		borderRadius: 1,
		margin: "4.8rem",
	},
}));

const LoginCandidat = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [userDATA, setUserDATA] = useState({
		nom: "",
		prenom: "",
		email: "",
		password: "",
		tel: "",
		adresse: "",
	});
	const dispatch = useDispatch();

	const { email, password, nom, prenom, tel } = data;
	const navigate = useNavigate();

	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleRegisterChange = (e) => {
		setUserDATA({ ...userDATA, [e.target.name]: e.target.value });
	};
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		// dispatch(login(data, navigate));
		try {
			dispatch(login(data, navigate));
			navigate("/");
		} catch (e) {
			console.log(e);
			setMessage(e.message);
		}
	};
	const handleFormRestPassword = async (e) => {
		e.preventDefault();
		dispatch(RestPsw(data, navigate));
	};

	const handleSubmitRegister = async (e) => {
		e.preventDefault();
		dispatch(register(userDATA, navigate));
	};

	return (
		<JWTRoot>
			<Card className="card">
				<Grid container>
					<Grid item lg={7} md={12} sm={5} xs={12}>
						<JustifyBox p={4} height="1500" width={"50"}>
							<IMG src={cand} alt="" />
						</JustifyBox>
					</Grid>
					<Grid item lg={5} md={7} sm={7} xs={12}>
						<Logo src={logoimg} />
						<ContentBox>
							<h1 style={{ fontSize: "70px", color: "#092B4C" }}>
								{" "}
								Bienvenue sur Orange Test
							</h1>
							<FlexBox mb={5} flexWrap="wrap">
								<Box position="centre">
									<ThemeProvider theme={theme}>
										<StyleButton>
											<Button
												sx={{ textTransform: "capitalize" }}
												className="btn btn-primary"
												data-bs-toggle="modal"
												data-bs-target="#admin"
											>
												Administrateur
											</Button>
										</StyleButton>
										<StyleButton>
											<Button
												sx={{ textTransform: "capitalize" }}
												className="btn btn-primary"
												data-bs-toggle="modal"
												data-bs-target="#collaborateur"
											>
												Collaborateur
											</Button>
										</StyleButton>

										<p
											className="btn btn-primary"
											data-bs-toggle="modal"
											data-bs-target="#Register"
										>
											Créer un compte Collaborateur
										</p>
										<br />
										<p
											class="btn "
											role="button"
											x
											sx={{ textTransform: "capitalize" }}
											data-bs-toggle="modal"
											data-bs-target="#forget"
										>
											mot de passe oblié?
										</p>
										<br />
									</ThemeProvider>
								</Box>
							</FlexBox>
						</ContentBox>
					</Grid>

					{/* Modal Admin  */}
					<div
						className="modal fade"
						id="admin"
						data-bs-backdrop="static"
						data-bs-keyboard="false"
						tabIndex={-1}
						aria-labelledby="staticBackdropLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h3 className="modal-title" id="staticBackdropLabel">
										Connexion Administrateur
									</h3>{" "}
									<br /> <br />
								</div>
								<div className="modal-body">
									<ValidatorForm>
										<TextValidator
											sx={{ mb: 3, width: "100%" }}
											variant="outlined"
											size="small"
											label="Email"
											onChange={handleChange}
											type="email"
											name="email"
											value={email}
											validators={["required", "isEmail"]}
											errorMessages={[
												"this field is required",
												"email is not valid",
											]}
										/>
										<br />
										<TextValidator
											sx={{ mb: "12px", width: "100%" }}
											label="Password"
											variant="outlined"
											size="small"
											onChange={handleChange}
											name="password"
											type="password"
											value={password}
											validators={["required"]}
											errorMessages={["this field is required"]}
										/>
										<br />
									</ValidatorForm>
								</div>
								{message && <p sx={{ color: "red" }}>{message}</p>}
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
									>
										Fermer
									</button>
									<button
										type="button"
										className="btn btn-primary"
										onClick={handleFormSubmit}
										data-bs-dismiss="modal"
									>
										Connecter
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Modal Collaborateur */}
					<div
						className="modal fade"
						id="collaborateur"
						data-bs-backdrop="static"
						data-bs-keyboard="false"
						tabIndex={-1}
						aria-labelledby="staticBackdropLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h3 className="modal-title" id="staticBackdropLabel">
										Connexion Collaborateur
									</h3>{" "}
									<br /> <br /> <br />
								</div>
								<div className="modal-body">
									<ValidatorForm>
										<TextValidator
											sx={{ mb: 3, width: "100%" }}
											variant="outlined"
											size="small"
											label="Email"
											onChange={handleChange}
											type="email"
											name="email"
											value={email}
											validators={["required", "isEmail"]}
											errorMessages={[
												"this field is required",
												"email is not valid",
											]}
										/>
										<br />
										<TextValidator
											sx={{ mb: "12px", width: "100%" }}
											label="Password"
											variant="outlined"
											size="small"
											onChange={handleChange}
											name="password"
											type="password"
											value={password}
											validators={["required"]}
											errorMessages={["this field is required"]}
										/>
										<br />
									</ValidatorForm>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
									>
										Fermer
									</button>
									<button
										type="button"
										className="btn btn-primary"
										data-bs-dismiss="modal"
										onClick={handleFormSubmit}
									>
										Connecter
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Modal Forget Password */}

					<div
						className="modal fade"
						id="forget"
						tabIndex={-1}
						aria-labelledby="forget"
						aria-hidden="true"
					>
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5
										className="modal-title"
										id="forget"
										style={{ margin: "1.6rem" }}
									>
										Réinitialiser Votre mot de passe <br />
									</h5>
								</div>

								<div className="modal-body">
									<ValidatorForm>
										<div className="mb-3" style={{ marginTop: "1rem" }}>
											<label className="form-label">Email address</label>
											<input
												onChange={handleChange}
												type="email"
												name="email"
												value={email}
												validators={["required", "isEmail"]}
												className="form-control"
												placeholder="email@example.com"
												errorMessages={[
													"this field is required",
													"email is not valid",
												]}
											/>
										</div>
										<div className="d-grid gap-2">
											<button
												type="button"
												className="  btn btn-primary"
												data-bs-dismiss="modal"
												onClick={handleFormRestPassword}
											>
												Envoyer
											</button>
										</div>
									</ValidatorForm>
								</div>
							</div>
						</div>
					</div>
					{/* Modal Register  Collaborateur */}
					<div
						className="modal fade"
						id="Register"
						data-bs-backdrop="static"
						data-bs-keyboard="false"
						tabIndex={-1}
						aria-labelledby="staticBackdropLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">
										Demmande de creation d'un compte Collaborateur
									</h5>{" "}
									<br /> <br /> <br />
								</div>
								<div className="modal-body">
									<ValidatorForm>
										<TextValidator
											sx={{ mb: 3, width: "100%" }}
											variant="outlined"
											size="small"
											label="Nom"
											onChange={handleRegisterChange}
											type="text"
											name="nom"
											value={nom}
											validators={["required", "isNaN"]}
											errorMessages={[
												"this field is required",
												"email is not valid",
											]}
										/>
										<br />
										<TextValidator
											sx={{ mb: 3, width: "100%" }}
											variant="outlined"
											size="small"
											label="Prénom"
											onChange={handleRegisterChange}
											type="text"
											name="prenom"
											value={prenom}
											validators={["required", "isEmail"]}
											errorMessages={[
												"this field is required",
												"email is not valid",
											]}
										/>
										<br />
										<TextValidator
											sx={{ mb: 3, width: "100%" }}
											variant="outlined"
											size="small"
											label="Email"
											type="email"
											name="email"
											value={email}
											validators={["required", "isEmail"]}
											errorMessages={[
												"this field is required",
												"email is not valid",
											]}
										/>
										<TextValidator
											sx={{ mb: "12px", width: "100%" }}
											label="Téléphone"
											variant="outlined"
											size="small"
											onChange={handleRegisterChange}
											name="tel"
											type="number"
											value={tel}
											validators={["required"]}
											errorMessages={["this field is required"]}
										/>
										<br />
										<TextValidator
											sx={{ mb: "12px", width: "100%" }}
											label="Télephone"
											variant="outlined"
											size="small"
											onChange={handleRegisterChange}
											name="adresse"
											type="text"
											value={tel}
											validators={["required"]}
											errorMessages={["this field is required"]}
										/>
										<br />
										<TextValidator
											sx={{ mb: 3, width: "100%" }}
											variant="outlined"
											size="small"
											label="Mot de passe"
											onChange={handleRegisterChange}
											type="password"
											name="password"
											value={password}
											validators={["required"]}
											errorMessages={["this field is required"]}
										/>
									</ValidatorForm>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
									>
										Fermer
									</button>
									<button
										type="button"
										className="btn btn-primary"
										data-bs-dismiss="modal"
										onClick={handleSubmitRegister}
									>
										Enregister
									</button>
								</div>
							</div>
						</div>
					</div>
				</Grid>
			</Card>
		</JWTRoot>
	);
};

export default LoginCandidat;
