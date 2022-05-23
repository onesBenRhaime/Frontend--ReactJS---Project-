import { Navigate, useLocation } from "react-router-dom";
const AuthRoute = ({ children }) => {
	let location = useLocation();
	const token = localStorage.getItem("jwt");
	if (token) {
		return (
			<Navigate
				replace
				to="/dashboard"
				state={{
					from: location,
				}}
			/>
		);
	} else {
		return children;
	}
};

export default AuthRoute;
