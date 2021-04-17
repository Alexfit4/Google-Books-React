import React from "react";
import {Jumbotron, Container} from 'react-bootstrap'
export default function JumboTronSearch() {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>(React) Google Books Search</h1>
					<p>
						Search for and Save Books of Interest
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
}
