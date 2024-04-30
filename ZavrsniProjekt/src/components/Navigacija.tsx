import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigacija() {
	return (
		<Navbar fixed="top" expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">Platforma za volontiranje</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Aktivnosti</Nav.Link>
						<Nav.Link href="">Volonteri</Nav.Link>
						<Nav.Link href="">Udruge</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
export default Navigacija;
