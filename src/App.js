import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginTest from "./components/Login";

import Index from "./components/Index";

/*  Index Login  */

import Home from "./components/Home";
import ForgetPsw from "./components/HomeForgetPsw";
import Register from "./components/HomeRegister";
import Forget from "./components/ForgotPassword";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Admin/Dashboard";
import DashboardColl from "./components/collaborateur/Dashboard";
import AddC from "./components/Admin/collaborateur/AddC";

import InfoQ from "./components/Admin/question/InfoQ";
import AddQ from "./components/Admin/question/AddQ";
import ListeQ from "./components/Admin/question/ListeQ";

import Contact from "./components/Admin/Contact";
import Contacts from "./components/Admin/Contacts";
import ListeC from "./components/Admin/collaborateur/ListeC";

import Profile from "./components/Admin/Profile";
import Importer from "./components/collaborateur/manageSession/Importer";

import Register2 from "./components/Register";
import AuthRoute from "./Utils/AuthRoutes";
import BaseRoute from "./Utils/BaseRoutes";
import LoginCandidat from "./components/Candidat/login";

import Start from "./components/collaborateur/manageSession/Start";
import Exporter from "./components/collaborateur/manageSession/Exporter";
import Tester from "./components/collaborateur/manageSession/Tester";
import WebTestResult from "./components/collaborateur/manageSession/WebTestResult";

import ResultatSession from "./components/collaborateur/manageSession/Resultats";
import ManageSession from "./components/collaborateur/manageSession/ManageSession";
import AfficherTest from "./components/collaborateur/manageTests/ListerTest";
import ProfileCollaborateur from "./components/collaborateur/Profile";
import Statistique from "./components/Admin/Statistique";
import ListeCand from "./components/collaborateur/manageCandidates/ListeCand";
import AddCand from "./components/collaborateur/manageCandidates/AddCand";

import AddTest from "./components/collaborateur/manageTests/AddTest";
import InfoTest from "./components/collaborateur/manageTests/InfoTest";
import TestPasser from "./components/collaborateur/manageTests/TestPasser";
import IndexCandidat from "./components/Candidat/IndexCandidat";

import MesTests from "./components/Candidat/MesTests";
import MesResultat from "./components/Candidat/MesResultat";
import StartTest from "./components/Candidat/StartTest";
//import AuthCandidat from "./Utils/AuthCandidat";
import CandidatBaseRoute from "./Utils/CandidatBaseRoute";
import Shortlist from "./components/collaborateur/manageSession/Shortlist";
import AddSession from "./components/Admin/session/AddSession";
import ListeSession from "./components/Admin/session/ListeSession";

import Session from "./components/Admin/session/Session";
function App() {
	return (
		<div class="wrapper">
			<Router>
				<Routes>
					{/*......................Route Users.................... */}
					<Route path="/home" element={<Home />}></Route>{" "}
					<Route path="/Forget" element={<ForgetPsw />}></Route>
					<Route path="/Register" element={<Register />}></Route>
					<Route
						path="/"
						element={
							<AuthRoute>
								<Index />
							</AuthRoute>
						}
					/>{" "}
					<Route
						path="/login"
						element={
							<AuthRoute>
								<Index />
							</AuthRoute>
						}
					/>
					<Route path="*" element={<NotFound />} />
					{/*......................Test Test .................... */}
					{/*	<Route path="/loginTest" element={<LoginTest />} />
				
						<Route path="/Register" element={<Register />}></Route>
					<Route path="/candidatLogin" element={<LoginCandidat />} />
				     	
					    <Route path="/register" element={<Register />} />
				    	<Route path="/forgot-password Test" element={<Forget />} />
					*/}
					{/*.....Route Users */}
					{/*.........Route Admin......... */}
					<Route
						path="/dashboard"
						element={
							<BaseRoute>
								<Dashboard />
							</BaseRoute>
						}
					/>
					<Route
						path="/Contacts"
						element={
							<BaseRoute>
								<Contacts />
							</BaseRoute>
						}
					/>
					<Route
						path="/Contact"
						element={
							<BaseRoute>
								<Contact />
							</BaseRoute>
						}
					/>
					<Route
						path="/ProfileAdmin"
						element={
							<BaseRoute>
								<Profile />
							</BaseRoute>
						}
					/>
					<Route path="/Statistique" element={<Statistique />} />
					{/*Route Collaborateur */}
					<Route
						path="/AddCollaborateur"
						element={
							<BaseRoute>
								<AddC />
							</BaseRoute>
						}
					/>
					<Route
						path="/ListeCollaborateur"
						element={
							<BaseRoute>
								<ListeC />
							</BaseRoute>
						}
					/>
					{/*Route Collaborateur */}
					{/*Route Question */}
					<Route
						path="/AddQuestion"
						element={
							<BaseRoute>
								<AddQ />
							</BaseRoute>
						}
					/>
					<Route
						path="/ListeQuestion"
						element={
							<BaseRoute>
								<ListeQ />
							</BaseRoute>
						}
					/>
					<Route
						path="/InfoQuestion"
						element={
							<BaseRoute>
								<InfoQ />
							</BaseRoute>
						}
					/>
					<Route
						path="/InfoQuestion/:idQ"
						element={
							<BaseRoute>
								<InfoQ />
							</BaseRoute>
						}
					/>
					{/*Route Question */}
					{/*...Session de Recrutement... */}
					<Route path="/session" element={<Session />} />
					<Route path="/session/ajouter" element={<AddSession />} />
					<Route path="/session/listeSession" element={<ListeSession />} />
					{/*...Session de Recrutement... */}
					{/*...............Route Admin............*/}
					{/*...............Route Colaborateur...... */}
					<Route path="/dashboard/collaborateur" element={<DashboardColl />} />
					<Route
						path="/ProfileCollaborateur"
						element={
							<BaseRoute>
								<ProfileCollaborateur />
							</BaseRoute>
						}
					/>
					{/*...Session de Recrutement... */}
					<Route path="/session/ajouter" element={<AddSession />} />
					<Route path="/session/start" element={<Start />} />
					<Route path="/session/exporter" element={<Exporter />} />
					<Route path="/session/tester" element={<Tester />} />
					<Route path="/session/resultat" element={<ResultatSession />} />
					<Route path="/session/ListePreselectionner" element={<Shortlist />} />
					<Route path="/session/WebTestResult" element={<WebTestResult />} />
					<Route path="/session/manage" element={<ManageSession />} />
					{/*...Session de Recrutement... */}
					{/*...Manage Test... */}
					<Route path="/manage/test/Afficher" element={<AfficherTest />} />
					<Route path="/manage/test/Ajouter" element={<AddTest />} />
					<Route path="/manage/test/tests" element={<TestPasser />} />
					<Route path="/manage/test/infoTest" element={<InfoTest />} />
					{/*...Manage Test... */}
					{/*...Manage Candidat... */}
					<Route path="/manage/candidates/lister" element={<ListeCand />} />
					<Route path="/manage/candidates/ajouter" element={<AddCand />} />
					{/*...Manage Candidat... */}
					{/*Route Colaborateur */}
					{/*........Route Candidat.......*/}
					<Route path="/candidat" element={<IndexCandidat />} />
					<Route
						path="/candidat/mesTests"
						element={
							<CandidatBaseRoute>
								<MesTests />
							</CandidatBaseRoute>
						}
					/>
					<Route
						path="/candidat/startTest"
						element={
							<CandidatBaseRoute>
								<StartTest />
							</CandidatBaseRoute>
						}
					/>
					<Route
						path="/candidat/startTest/:idTest/:idQ"
						element={
							<CandidatBaseRoute>
								<StartTest />
							</CandidatBaseRoute>
						}
					/>
					<Route
						path="/candidat/mesResultat"
						element={
							<CandidatBaseRoute>
								<MesResultat />
							</CandidatBaseRoute>
						}
					/>
					{/*........Route Candidat.......*/}
				</Routes>
			</Router>
		</div>
	);
}
export default App;
