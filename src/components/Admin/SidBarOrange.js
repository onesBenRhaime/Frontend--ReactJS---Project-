import React from "react";

export default function Header() {
	return (
		<div>
			<aside
				className=" main-sidebar sidebar-dark-primary d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
				style={{ width: 250 }}
			>
                
				<a
					href="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
				>
					<svg
						className="bi me-2"
						width={40}
						height={32}
						role="img"
						aria-label="Boosted"
					>
						<use xlinkHref="#boosted" />
					</svg>
					<span className="fs-4">Sidebar</span>
				</a>
				<hr />
				<ul className="nav nav-pills flex-column mb-auto">
					<li className="nav-item">
						<a href="i" className="nav-link active" aria-current="page">
							<svg className="bi me-2" width={16} height={16}>
								<use xlinkHref="#home" />
							</svg>
							Home
						</a>
					</li>
					<li>
						<a href="i" className="nav-link text-white">
							<svg className="bi me-2" width={16} height={16}>
								<use xlinkHref="#speedometer2" />
							</svg>
							Dashboard
						</a>
					</li>
					<li>
						<a href="i" className="nav-link text-white">
							<svg className="bi me-2" width={16} height={16}>
								<use xlinkHref="#table" />
							</svg>
							Orders
						</a>
					</li>
					<li>
						<a href="i" className="nav-link text-white">
							<svg className="bi me-2" width={16} height={16}>
								<use xlinkHref="#grid" />
							</svg>
							Products
						</a>
					</li>
					<li>
						<a href="i" className="nav-link text-white">
							<svg className="bi me-2" width={16} height={16}>
								<use xlinkHref="#people-circle" />
							</svg>
							Customers
						</a>
					</li>
				</ul>
				<hr />
				<div className="dropdown">
					<a
						href="i"
						className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
						id="dropdownUser1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<img
							src="https://github.com/mdo.png"
							alt=""
							width={32}
							height={32}
							className="rounded-circle me-2"
						/>
						<strong>mdo</strong>
					</a>
					<ul
						className="dropdown-menu dropdown-menu-dark text-small shadow"
						aria-labelledby="dropdownUser1"
					>
						<li>
							<a className="dropdown-item" href="i">
								New project...
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="i">
								Settings
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="i">
								Profile
							</a>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a className="dropdown-item" href="i">
								Sign out
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
}
