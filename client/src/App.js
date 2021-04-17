import "./App.css";
import React from "react";
import BootStrapNavbar from "./components/Navbar/BootStrapNavbar";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<div>
			<BootStrapNavbar />
			<Search />
		</div>
	);
}

export default App;
