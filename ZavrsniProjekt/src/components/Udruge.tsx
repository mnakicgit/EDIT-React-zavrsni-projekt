import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";

function Udruge() {
	return (
		<>
			<Container fluid className="bg-body-secondary rounded-4 mb-5">
				<Row>
					<h1 className="my-4" style={{ textAlign: "left" }}>
						Udruge
					</h1>
				</Row>
				<Row>
					<Col className="col-sm-12 col-md-10" style={{ textAlign: "left" }}>
						<div className="d-flex mb-4">
							<h4 style={{ marginRight: "2rem", marginBottom: "0" }}>Prijavi svoju udrugu i lako pronađi volontere</h4>
							<div></div>
						</div>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
							non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Udruge;
