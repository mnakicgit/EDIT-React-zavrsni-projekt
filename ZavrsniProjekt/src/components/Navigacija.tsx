import { useState } from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";

interface NavProps {
	funPoc: () => void;
	funVol: () => void;
	funAkt: () => void;
	funUdr: () => void;
	promjenaKonteksta: () => void;
}

function Navigacija(props: NavProps) {
	const [expanded, setExpanded] = useState(false);

	const handleCollapse = () => {
		setExpanded(false);
	};

	return (
		<>
			<Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} fixed="top" expand="lg" className="bg-body-secondary">
				<Container>
					<Navbar.Brand className="">
						<Nav.Link
							onClick={() => {
								props.funPoc();
								handleCollapse();
							}}
						>
							<a href="#" style={{ marginRight: "0.5rem", pointerEvents: "none" }}>
								<i className="fa-solid fa-handshake-angle fa-xl"></i>
							</a>
							Platforma za volontiranje
						</Nav.Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								onClick={() => {
									props.funAkt();
									handleCollapse();
								}}
							>
								Aktivnosti
							</Nav.Link>
							<Nav.Link
								onClick={() => {
									props.funVol();
									handleCollapse();
								}}
							>
								Volonteri
							</Nav.Link>
							<Nav.Link
								onClick={() => {
									props.funUdr();
									handleCollapse();
								}}
							>
								Udruge
							</Nav.Link>
						</Nav>
						<Nav className="ml-auto">
							<Form className="d-flex justify-content-center">
								<Form.Check
									type="switch"
									id="custom-switch"
									label="Admin"
									className="mr-2"
									onChange={() => {
										props.promjenaKonteksta();
										handleCollapse();
									}}
								/>
								<label htmlFor="custom-switch" />
							</Form>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default Navigacija;
