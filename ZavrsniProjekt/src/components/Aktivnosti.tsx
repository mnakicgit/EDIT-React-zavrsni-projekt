import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Container, Button, Offcanvas, Card, Row, Col } from "react-bootstrap";
import AdminContext from "./AdminContext";

function Aktivnosti() {
	const kontekst = useContext(AdminContext);
	const [aktivnostiSaServera, postaviAktivnostiSaServera] = useState([]);
	const [show, setShow] = useState(false);

	const handleDelete = () => {};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		axios
			.get("http://localhost:3001/aktivnosti/")
			.then((vol) => postaviAktivnostiSaServera(vol.data))
			.catch((err) => alert(err));
	}, []);

	return (
		<>
			<Container>
				<Container fluid className="bg-body-secondary rounded-4 mb-5 p-4 py-2">
					<Row>
						<h1 className="my-4" style={{ textAlign: "left" }}>
							Aktivnosti
						</h1>
					</Row>
					<Row>
						<Col className="col-sm-12 col-md-10" style={{ textAlign: "left" }}>
							<div className="d-flex mb-4">
								{/* <h4 style={{ marginRight: "2rem", marginBottom: "0" }}>Uključi se!</h4> */}
								<div></div>
							</div>

							<p>Ovu stranicu nisam stigla dovršiti, ali barem radi dohvaćanje sa servera i uloga admina.</p>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					{/* PROMINI MARGINE */}
					{kontekst && (
						<>
							<Button onClick={handleShow} className="position-fixed" style={{ bottom: "4rem", right: "4rem", zIndex: "10" }} variant="primary">
								Dodaj aktivnost
							</Button>
						</>
					)}

					{aktivnostiSaServera.map((aktivnost) => (
						<Container fluid>
							<Card onClick={handleShow} className="mb-3">
								<Card.Header>
									<Card.Title>{aktivnost.naziv}</Card.Title>
									<Card.Subtitle>{aktivnost.lokacija}</Card.Subtitle>
								</Card.Header>
								<Card.Body>
									<Card.Text>{aktivnost.opis}</Card.Text>
									{kontekst && (
										<>
											<Button variant="danger" onClick={handleDelete}>
												<i className="fa-solid fa-trash-can"></i>
											</Button>
										</>
									)}
								</Card.Body>
							</Card>
						</Container>
					))}

					<Offcanvas show={show} onHide={handleClose} placement="end">
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>Offcanvas</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
					</Offcanvas>
				</Container>
			</Container>
		</>
	);
}
export default Aktivnosti;
