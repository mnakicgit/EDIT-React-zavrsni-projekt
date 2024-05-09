import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

//dizajn kopiran s https://mdbootstrap.com/docs/standard/navigation/footer/

function Footer() {
	return (
		<>
			<Container fluid className="bg-dark-subtle position-absolute w-100 h-auto p-4" style={{ bottom: 0 }}>
				<Row>
					<Col className="col-lg-6 col-md-12 mb-4 mb-md-0">
						<h5 className="text-uppercase">Footer Content</h5>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque
							cumque eum delectus sint!
						</p>
					</Col>

					<Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
						<h5 className="text-uppercase">Links</h5>

						<ul className="list-unstyled mb-0">
							<li>
								<a href="#!" className="text-body">
									Link 1
								</a>
							</li>
							<li>
								<a href="#!" className="text-body">
									Link 2
								</a>
							</li>
							<li>
								<a href="#!" className="text-body">
									Link 3
								</a>
							</li>
							<li>
								<a href="#!" className="text-body">
									Link 4
								</a>
							</li>
						</ul>
					</Col>

					<Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
						<h5 className="text-uppercase mb-0">Links</h5>

						<ul className="list-unstyled">
							<li>
								<a href="#!" className="text-body">
									Link 1
								</a>
							</li>
							<li>
								<a href="#!" className="text-body">
									Link 2
								</a>
							</li>
							<li>
								<a href="#!" className="text-body">
									Link 3
								</a>
							</li>
							<li>
								<a href="#!" className="text-body">
									Link 4
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Footer;
