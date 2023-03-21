import React from "react";
import "./App.css";
import Home from "./pages/home";
import Report from "./pages/report";
import Login from "./pages/login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";

function App() {
	return (
		<div className="App">
			<div>hello</div>
			<Router>
				<div>
					<NavBar />
					<hr />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="report" element={<Report />} />
						<Route path="login" element={<Login />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
