import "../App.css";
import { Image, Row, Col } from "react-bootstrap";

function Pocetna() {
	return (
		<>
			<Row>
				<Col className="col-12 col-sm-12 col-md-6 text-sm-center text-md-start d-flex flex-column justify-content-center align-items-center" style={{ maxWidth: "75ch" }}>
					<div style={{ maxWidth: "30rem" }}>
						<Row>
							<Image src="./src/assets/juniorDev.png" alt="JuniorDev Digitalna dalmacija" className="mb-4" style={{ filter: "brightness(0)" }}></Image>
						</Row>
						<Row className="mb-2">
							<h4>Stranica je napravljena u sklopu EDIT JuniorDev React tečaja.</h4>
							<p>Autorica: Maja Nakić</p>
						</Row>
						<Row>
							<div className="text-sm-center text-md-start mb-3 w-100">
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
					</div>
				</Col>
				<Col className="d-flex flex-column justify-content-center align-items-center">
					<Image className="w-75" style={{ minWidth: "15rem" }} src="./src/assets/2538100.jpg" alt="Profilna slika"></Image>
					<a href="http://www.freepik.com">Image designed by Freepik</a>
				</Col>
			</Row>
		</>
	);
}
export default Pocetna;
