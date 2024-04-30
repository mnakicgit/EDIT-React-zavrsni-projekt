import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function Navigacija() {
	function handleClickUdruge() {}
	function handleClickAktivnosti() {}
	function handleClickVolonteri() {}

	return (
		<>
			<Navbar fixed="top" expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">Platforma za volontiranje</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link onClick={handleClickAktivnosti} href="#home">
								Aktivnosti
							</Nav.Link>
							<Nav.Link onClick={handleClickVolonteri} href="">
								Volonteri
							</Nav.Link>
							<Nav.Link onClick={handleClickUdruge} href="">
								Udruge
							</Nav.Link>
						</Nav>
						<Nav className="ml-auto">
							<Form>
								<Form.Check type="switch" id="custom-switch" label="Admin" className="mr-2" />
							</Form>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default Navigacija;
