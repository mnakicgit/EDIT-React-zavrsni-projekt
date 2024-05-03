import { useState, useEffect } from "react";
import axios from "axios";
import KarticaVolontera from "./KarticaVolontera";
import Container from "react-bootstrap/Container";
import FormaVolontera from "./FormaVolontera";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Volonteri() {
	const [volonteriSaServera, postaviVolontereSaServera] = useState([]);
	const [showOffcanvas, setShowOffcanvas] = useState(false);

	const handleClose = () => setShowOffcanvas(false);
	const handleShow = () => setShowOffcanvas(true);

	useEffect(() => {
		axios
			.get("http://localhost:3001/volonteri/")
			.then((vol) => postaviVolontereSaServera(vol.data))
			.catch((err) => alert(err));
	}, []);

	return (
		<>
			<Container className="p-0">
				<Container fluid className="bg-body-secondary rounded-4 mb-5">
					<Row>
						<h1 className="my-4" style={{ textAlign: "left" }}>
							Volonteri
						</h1>
					</Row>
					<Row>
						<Col className="col-sm-12 col-md-10" style={{ textAlign: "left" }}>
							<div className="d-flex mb-4">
								<h4 style={{ marginRight: "2rem", marginBottom: "0" }}>Prijavi se i ti!</h4>
								<div>
									<Button variant="primary" onClick={handleShow}>
										Prijava
									</Button>
								</div>
							</div>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</Col>
					</Row>
				</Container>
				<Row>
					<Col className="col-12 col-sm-12 col-md-2 order-md-last">Filteri</Col>
					<Col className="col-sm-12 col-md-10 order-md-first">
						<KarticaVolontera volonteri={volonteriSaServera} />
					</Col>
				</Row>
			</Container>

			{/* offcanvas se ne zatvori nakon submita, prosljedi i pozovi handleClose  */}
			<Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Prijavi se!</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<FormaVolontera dodaj={postaviVolontereSaServera} />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}
export default Volonteri;
