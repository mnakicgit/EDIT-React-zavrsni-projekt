import { useState, useEffect } from "react";
import axios from "axios";
import KarticaVolontera from "./KarticaVolontera";
import Container from "react-bootstrap/Container";
import FormaVolontera from "./FormaVolontera";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

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
			<Button variant="primary" onClick={handleShow}>
				Launch
			</Button>

			{/* offcanvas se ne zatvori nakon submita, prosljedi i pozovi handleClose  */}
			<Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Prijavi se!</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<FormaVolontera dodaj={postaviVolontereSaServera} />
				</Offcanvas.Body>
			</Offcanvas>

			<Container className="row">
				<div className="col-sm-12 col-md-2 order-md-last">Filteri</div>
				<div className="col-sm-12 col-md-10 order-md-first">
					<KarticaVolontera volonteri={volonteriSaServera} />
				</div>
			</Container>
		</>
	);
}
export default Volonteri;
