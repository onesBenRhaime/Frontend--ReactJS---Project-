import React from "react";
import { Button, createTheme } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import  img404 from "./404.png";
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
	maxWidth: 1000,
	flexDirection: "column",
	justifyContent: "center",
}));

const IMG = styled("img")(() => ({
	width: "100%",
	marginBottom: "32px",
}));

const NotFoundRoot = styled(FlexBox)(() => ({
	width: "100%",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh !important",
}));

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<NotFoundRoot>
			<JustifyBox>
				<IMG src={img404} alt="" />
				<ThemeProvider theme={theme}>
					<Button
						color="orange"
						variant="contained"
						sx={{ textTransform: "capitalize" }}
						onClick={() => navigate("/")}
					>
						Retour
					</Button>
				</ThemeProvider>
			</JustifyBox>
		</NotFoundRoot>
	);
};

export default NotFound;
