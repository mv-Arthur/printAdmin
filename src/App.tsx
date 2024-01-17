import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { FullInfo } from "./pages/FullInfo";
import { Print } from "./pages/Print";

function App() {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<Main />} />
				<Route path={"/reqest/:id"} element={<FullInfo />} />
				<Route path={"/print"} element={<Print />} />
			</Routes>
		</div>
	);
}

export default App;
