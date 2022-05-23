import { Card, Grid, Button } from "@mui/material";
import React from "react";

import { Box, styled } from "@mui/system";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

import logoimg from "../logo.png";
import cand from "../Cand.png";

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
	marginTop: "80px",
	marginRight: "100px",
	position: "relative",
	background: "rgba(0, 0, 0, 0.01)",
}));

const StyleButton = styled(Button)(() => ({
	padding: "20px", //all
	marginBlock: "30px",
}));

const IMG = styled("img")(() => ({
	width: "100%",
}));

const Logo = styled("img")(() => ({
	width: "40%",
	height: "100px",
	marginTop: "3rem",
}));
const JWTRoot = styled(JustifyBox)(() => ({
	background: "#1A2038",
	Height: "350px",
	width: "100%",
	"& .card": {
		maxWidth: 1500,
		borderRadius: 12,
		margin: "10.6rem",
	},
}));

const LoginCandidat = () => {
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
												data-bs-target="#candidat"
											>
												Connecter
											</Button>
										</StyleButton>
										<br />
									</ThemeProvider>
								</Box>
							</FlexBox>
						</ContentBox>
					</Grid>

					{/* Modal Connexion Candidat  */}
					<div
						className="modal fade"
						id="candidat"
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
										Connexion Candidat
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
											type="email"
											name="email"
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
											name="password"
											type="password"
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
									<button type="button" className="btn btn-primary">
										Connecter
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
