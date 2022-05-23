import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import { useSelector } from "react-redux";
import Topbar from "./Topbar";

export default function Dashboard() {
	useSelector((state) => state.session);

	return (
		<div>
			<Sidebar />
			<Topbar />

			<div className="wrapper">
				{/* Content Wrapper. Contains page content */}
				<div className="content-wrapper">
					{/* Main content */}
					<section className="content">
						<div className="px-3 py-4">
							<h2 className="pb-2 border-bottom"> Dashboard Administarteur </h2>
							<div className="row g-4 py-3 row-cols-lg-3">
								<div className="col d-flex align-items-start">
									<div>
										<h3>Session </h3>
										<p>
											{" "}
											une session organiser par l'ODC contient des candidats
											déga postuler sur la plateforme de innovation.orange.tn
											peut etre FORMATION , EVENEMENT, UN STAGE
										</p>
										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
								<div className="col d-flex align-items-start">
									<div>
										<h3>Questionnaire</h3>
										<p>
											Questionnaire est une facon de présélectionner les
											candidats d'une session. Carecteriser par nombre des
											question, technologie, domiane,duré et date
										</p>
										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
								<div className="col d-flex align-items-start">
									<div>
										<h3>Banque des question </h3>
										<p>
											la banque des question est la liste des question ajouter
											par l'Administarteur est affecter un questionnire pour
											chaque candidature
										</p>

										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
								<div className="col d-flex align-items-start">
									<div>
										<h3>Technologies</h3>
										<p></p>

										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
								<div className="col d-flex align-items-start">
									<div>
										<h3>Domaine</h3>
										<p></p>
										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
								<div className="col d-flex align-items-start">
									<div>
										<h3>Categorie</h3>
										<p></p>
										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
								<div className="col d-flex align-items-start">
									<div>
										<h3>Collaborateur</h3>
										<p></p>
										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
								<div className="col d-flex align-items-start">
									<div>
										<h3>Candidat </h3>
										<p></p>
										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
								<div className="col d-flex align-items-start">
									<div>
										<h3>Tests Techniques </h3>
										<p></p>
										<button className="btn btn-primary">Gerer</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
