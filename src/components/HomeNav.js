import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import logo from "./logoP.png";
export default function MenuAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			{/* <FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={auth}
							onChange={handleChange}
							aria-label="login switch"
						/>
					}
					label={auth ? "Logout" : "Login"}
				/>
			</FormGroup> */}
			<AppBar
				position="static"
				className="navbar navbar-expand-lg navbar-dark bg-dark"
			>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<img
							src={logo}
							alt=""
							width={50}
							height={50}
							style={{ marginLeft: "1rem" }}
						/>
					</Typography>

					<div style={{ marginLeft: "1rem" }}>
						<span
							style={{
								fontSize: "2.75rem",
								fontWeight: "700",
								lineHeight: 1,
								letterSpacing: "0.125rem",
							}}
						>
							Test
						</span>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
