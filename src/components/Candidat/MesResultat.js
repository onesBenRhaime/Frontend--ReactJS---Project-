import React from "react";

import { Pie, G2 } from "@ant-design/plots";

import Navbar from "./Navbar";
export default function MesResultat() {
	const DemoPie = () => {
		const G = G2.getEngine("canvas");
		const data = [
			{
				type: "分类一",
				value: 100,
			},
			{
				type: "分类二",
				value: 200,
			},
			{
				type: "分类三",
				value: 300,
			},
			{
				type: "分类四",
				value: 100,
			},
			{
				type: "分类五",
				value: 100,
			},
			{
				type: "其他",
				value: 200,
			},
		];
		const cfg = {
			appendPadding: 10,
			data,
			angleField: "value",
			colorField: "type",
			radius: 0.75,
			legend: false,
			label: {
				type: "spider",
				labelHeight: 40,
				formatter: (data, mappingData) => {
					const group = new G.Group({});
					group.addShape({
						type: "circle",
						attrs: {
							x: 0,
							y: 0,
							width: 40,
							height: 50,
							r: 5,
							fill: mappingData.color,
						},
					});
					group.addShape({
						type: "text",
						attrs: {
							x: 10,
							y: 8,
							text: `${data.type}`,
							fill: mappingData.color,
						},
					});
					group.addShape({
						type: "text",
						attrs: {
							x: 0,
							y: 25,
							text: `${data.value}个 ${data.percent * 100}%`,
							fill: "rgba(0, 0, 0, 0.65)",
							fontWeight: 700,
						},
					});
					return group;
				},
			},
			interactions: [
				{
					type: "element-selected",
				},
				{
					type: "element-active",
				},
			],
		};
		const config = cfg;
		return <Pie {...config} />;
	};
	<DemoPie />
	return (
		<div>
			<Navbar />
			<br />
			<br />
			<section className="container-sm">
				{/* /.card-header */}
				<div class="card-text">
					<h1>Résultat du Test</h1>
				</div>
				<div class="card ">
					<div class="card-body">
						<div>
							<h3> Vous avez obtenu la note de </h3>
							<p class="nav-pills ">
								<div>
									<p
										class="nav-link active"
										style={{ marginLeft: "5rem", width: 100 }}
									>
										40/100
									</p>
								</div>
							</p>
							<p>
								<div>
									<h4>
										Vous avez bientôt recontacté par votre recruteur pour la
										<br />
										<br />
										suite du processus de recrutement.
									</h4>
								</div>
							</p>
						</div>
						<div style={{ marginLeft: "25rem" }}>
							<DemoPie />
						</div>

						<h2> Merci pour votre investissement !</h2>
					</div>
				</div>
				{/* /.card-body */}
			</section>
		</div>
	);
}
