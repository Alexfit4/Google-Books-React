import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	Navbar,
	Nav,
} from "react-bootstrap";
import Save from "../Saved/Save.js";
import Search from "../Search/Search.js";
export default function BootStrapNavbar() {
	return (
		
			<div className="row">
				<div className="col-md-12">
					<Router>
						<div>
						<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
							<Navbar.Brand href="#home">Google Books</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto">
									<Nav.Link href="/">Search</Nav.Link>
									<Nav.Link href="/saved">Save</Nav.Link>								
								</Nav>
							</Navbar.Collapse>
						</Navbar>
						<br />
						<Switch>
							<Route path="/searched">
								<Search />
							</Route>
							<Route path="/saved">
								<Save />
							</Route>
						</Switch>
						</div>
					</Router>
				</div>
			</div>
		
	);
}
