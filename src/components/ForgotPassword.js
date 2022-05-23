import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Span } from "./Typography";
import { Card, Grid, Button, createTheme } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { ThemeProvider } from "@emotion/react";
import imgAdmin from "../images/secure.png";
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
	height: "50%",
	padding: "32px",
	marginTop: "70px",
	position: "relative",
	background: "rgba(0, 0, 0, 0.01)",
}));

const IMG = styled("img")(() => ({
	width: "100%",
}));

const ForgotPasswordRoot = styled(JustifyBox)(() => ({
	background: "#1A2038",
	minHeight: "100vh !important",
	"& .card": {
		maxWidth: 1000,
		borderRadius: 12,
		margin: "5rem",
	},
}));

const ForgotPassword = () => {
	const navigate = useNavigate();
	const [state, setState] = useState({});

	const handleChange = ({ target: { name, value } }) => {
		setState({
			...state,
			[name]: value,
		});
	};

	const handleFormSubmit = (event) => {
		console.log(state);
	};

	let { email } = state;

	return (
		<ForgotPasswordRoot>
			<Card className="card">
				<Grid container>
					<Grid item lg={5} md={5} sm={5} xs={12}>
						<JustifyBox p={5} height="100%">
							<IMG src={imgAdmin} alt="" />
						</JustifyBox>
					</Grid>
					<Grid item lg={5} md={7} sm={7} xs={12}>
						<ContentBox>
							<ValidatorForm onSubmit={handleFormSubmit}>
								<TextValidator
									sx={{ mb: 3, width: "100%" }}
									variant="outlined"
									label="Email"
									onChange={handleChange}
									type="email"
									name="email"
									size="small"
									value={email || ""}
									validators={["required", "isEmail"]}
									errorMessages={[
										"this field is required",
										"email is not valid",
									]}
								/>

								<FlexBox>
									<ThemeProvider theme={theme}>
										<Button variant="contained" color="orange" type="submit">
											Reset Password
										</Button>
										<Span sx={{ mr: 1, ml: "30px" }}>or</Span>
										<Button
											sx={{ textTransform: "capitalize" }}
											onClick={() => navigate("/loginCandidat")}
										>
											Register
										</Button>
									</ThemeProvider>
								</FlexBox>
							</ValidatorForm>
						</ContentBox>
					</Grid>
				</Grid>
			</Card>
		</ForgotPasswordRoot>
	);
};

export default ForgotPassword;
