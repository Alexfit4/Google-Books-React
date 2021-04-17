import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
export default function Save() {
	const [Results, setResults] = useState([]);
	const [deletedBooks, setDeletedBooks] = useState(0)
// Getting my book database. 
	useEffect(() => {
		axios.get("https://google-books-gw-api.herokuapp.com/api/books").then((data) => {
			
			setResults(data.data);
		});
	}, [deletedBooks]);

	// Deleting book by id. 
	const handleDelete = (id) => {
		axios.delete(`https://google-books-gw-api.herokuapp.com/api/books/${id}`).then((response) => {
			
			setDeletedBooks(deletedBooks + 1)
		});
	};
	return (
		<div className="container">
			<div className="row">
				{Results.map((book, index) => (
					<div key={index} value={book} className="col-md-6">
						<Card className="card-horizontal" style={{ marginTop: "10px" }}>
							<Card.Img
								variant="top"
								value={book}
								src={book.image}
								alt={book.title}
							/>
							<Card.Body className="relative ">
								<h5 className="card-title">{book.title}</h5>
								<p>Written by: {book.authors}</p>
								<p>{book.description}</p>
								<a
									className="btn btn-primary"
									rel="noopener noreferrer"
									target="_blank"
									href={book.link}
								>
									View
								</a>
								<a
									onClick={() => {
										handleDelete(book._id);
										
									}}
									className="btn btn-primary absolute bottom-5 right-5 "
								>
									Delete
								</a>
							</Card.Body>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
}
