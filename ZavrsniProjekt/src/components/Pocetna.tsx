import "../App.css";
import { Image, Container, Row, Col } from "react-bootstrap";

function Pocetna() {
	return (
		<>
			<Container className="row">
				<Row>
					<Col className="col-12 col-md-6 text-start d-flex flex-column justify-content-center" style={{ maxWidth: "75ch" }}>
						<Row className="mb-2">
							<h4>Stranica je napravljena u sklopu EDIT JuniorDev React tečaja.</h4>
							<p>Autorica: Maja Nakić</p>
						</Row>
						<Row>
							<div className=" w-100 d-flex justify-content-space-around">
								<a href="https://github.com/mnakicgit" target="_blank">
									<i className="fa-brands fa-github fa-2xl p-2"></i>
								</a>
								<a href="https://www.linkedin.com/in/maja-naki%C4%87-b9b702306/t" target="_blank">
									<i className="fa-brands fa-linkedin fa-2xl p-2"></i>
								</a>
								{/* <i className="fa-solid fa-envelope fa-2xl"></i> 
								<i className="fa-brands fa-react fa-2xl"></i>
								<i className="fa-brands fa-bootstrap fa-2xl"></i>*/}
							</div>
						</Row>
					</Col>
					<Col className=" d-flex flex-column justify-content-center align-items-center">
						{/* <div className="d-flex flex-column align-items-center" style={{ width: "fit-content" }}> */}
						<Image className="w-75" style={{ minWidth: "15rem" }} src="./src/assets/2538100.jpg" alt="Profilna slika"></Image>
						<a href="http://www.freepik.com">Image designed by Freepik</a>
						{/* </div> */}
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Pocetna;
