import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./style.css";

import "../SearchContainer/style.css";


export default function SearchContainer() {
	const [book, setBook] = useState("");
	const [result, setResult] = useState([]);
	const [apiKey, setApiKey] = useState(
		"AIzaSyDFIlIald2ulACgL1A2IOoU4YJJo73xtzE"
	);
	const [Title, setTitle] = useState();
	const [Authors, setAuthors] = useState([]);
	const [Description, setDescription] = useState();
	const [Image, setImage] = useState();
	const [Links, setLinks] = useState();

	const handleChange = (event) => {
		const book = event.target.value;
		console.log(event.target.key);
		console.log(book.toLowerCase());
		setBook(book.toLowerCase());
	};

	
	// useEffect - we are trying to track state, everytime state is changed then we want to post.
	// make sure state is false before we use useEffect

	useEffect(() => {
		if (Title && Authors && Description && Image && Links) {
			const bookData = {
				title: Title,
				authors: Authors,
				description: Description,
				image: Image,
				link: Links,
			};
			axios
				.post("/api/books", bookData)
				.then((response) => {
					console.log(response);
				});
		}
	}, [Title, Authors, Description, Image, Links]);

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.get(
				"https://www.googleapis.com/books/v1/volumes?q=" +
					book +
					"&key=" +
					apiKey +
					"&maxResults=40"
			)
			.then((data) => {
				
				setResult(data.data.items);
			});
	};


	return (
		<form onSubmit={handleSubmit}>
			<div className="card-header main-search">
				<div className="row">
					<div className="col-12 col-md-3 col-xl-3">
						<input
							onChange={handleChange}
							className="AutoFocus form-control"
							placeholder="Type something..."
							type="text"
						/>
					</div>
					<div className="ml-auto">
						<input
							type="submit"
							value="Search"
							className="btn btn-primary search-btn"
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					{result.map((book, index) => (
						<div key={index} value={book} className="col-md-6">
							<Card className="card-horizontal" style={{ marginTop: "10px" }}>
								<Card.Img
									variant="top"
									value={book}
									src={
										book.volumeInfo.imageLinks !== undefined
											? book.volumeInfo.imageLinks.thumbnail
											: ""
									}
									alt={book.title}
								/>
								<Card.Body className="relative ">
									<h5 className="card-title">{book.volumeInfo.title}</h5>
									<p>Written by: {book.volumeInfo.authors}</p>
									<p>{book.volumeInfo.description}</p>
									<a
										className="btn btn-primary"
										target="_blank"
										rel="noopener noreferrer"
										href={book.volumeInfo.canonicalVolumeLink}
									>
										View
									</a>
									<a
										onClick={() => {
											alert(`${book.volumeInfo.title} has been saved!`);
											setTitle(book.volumeInfo.title);
											setAuthors(book.volumeInfo.authors);
											setDescription(book.volumeInfo.description);
											setImage(book.volumeInfo.imageLinks.thumbnail);
											setLinks(book.volumeInfo.canonicalVolumeLink);
										}}
										className="btn btn-primary absolute bottom-5 right-5 "
									>
										Save
									</a>
								</Card.Body>
							</Card>
						</div>
					))}
				</div>
			</div>
		</form>
	);
}
