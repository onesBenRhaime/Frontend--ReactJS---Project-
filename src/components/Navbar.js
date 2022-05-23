import React from "react";

import logo from "./logoAdmin.PNG";

export default function Navbar() {
	return (
		<div>
			<div>
				{/* As a link */}
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<div className=" navbar-brand">
							<img
								src={logo}
								width={180}
								height={80}
								alt="Boosted"
								loading="lazy"
							/>
							<span className="h1">Orange Test</span>
						</div>
					</div>
				</nav>

				{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<div className="collapse navbar-collapse" id="navbarNav">
							<div className="navbar-brand">
								<img src={logo} alt="" width={70} height={70} />
							</div>
						</div>
					</div>
				</nav> */}
			</div>
		</div>
	);
}
