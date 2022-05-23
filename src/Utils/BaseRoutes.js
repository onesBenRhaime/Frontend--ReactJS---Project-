import { Navigate, useLocation } from "react-router-dom";
const BaseRoute = ({ children }) => {
	let location = useLocation();
	const token = localStorage.getItem("jwt");
	if (!token) {
		return (
			<Navigate
				replace
				to="/login"
				state={{
					from: location,
				}}
			/>
		);
	} else {
		return children;
	}
};

export default BaseRoute;
