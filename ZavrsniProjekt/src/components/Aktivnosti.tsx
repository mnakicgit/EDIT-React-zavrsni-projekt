import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Aktivnosti() {
	const [show, setShow] = useState(false);

	const handleDelete = () => {};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card onClick={handleShow}>
				<Card.Header>
					<Card.Title>Naslov</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
					<Button variant="primary" onClick={handleDelete}>
						Izbriši
					</Button>
				</Card.Body>
			</Card>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
			</Offcanvas>

			<Button className="floating-button" variant="primary">
				Dodaj aktivnost
			</Button>
		</>
	);
}
export default Aktivnosti;
