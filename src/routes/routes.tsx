/**
 * IMPORTS
 */
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/header";
import { Home } from "../pages/home/home";
import { AprovationListing } from "../pages/aprovation-listing";
import { ApprovalPending } from "../pages/pending-approvals";
import { Aprovation } from "../pages/aprovation/aprovation";

function AppRoutes() {
	return (
		<>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aprovation-listing" element={<AprovationListing />} />
					<Route path="/aprovacao-pedentes" element={<ApprovalPending />} />
					<Route
						path="/aprovacao/:idAprovacao/:idDriveName?"
						element={<Aprovation />}
					/>
				</Routes>
			</HashRouter>
		</>
	);
}

/**
 * EXPORTS
 */
export default AppRoutes;
