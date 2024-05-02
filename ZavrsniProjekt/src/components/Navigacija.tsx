import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

interface NavProps {
	funPoc: () => void;
	funVol: () => void;
	funAkt: () => void;
	funUdr: () => void;
}

function Navigacija(props: NavProps) {
	return (
		<>
			<Navbar fixed="top" expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand>Platforma za volontiranje</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link onClick={props.funPoc}>Početna</Nav.Link>
							<Nav.Link onClick={props.funAkt}>Aktivnosti</Nav.Link>
							<Nav.Link onClick={props.funVol}>Volonteri</Nav.Link>
							<Nav.Link onClick={props.funUdr}>Udruge</Nav.Link>
						</Nav>
						<Nav className="ml-auto">
							<Form className="d-flex justify-content-center">
								<Form.Check type="switch" id="custom-switch" label="Admin" className="mr-2" />
								<label for="custom-switch" />
							</Form>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default Navigacija;
