import "../App.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function Pocetna() {
	return (
		<>
			<Container className="row">
				<div className="col d-flex flex-column justify-content-center  text-start" style={{ maxWidth: "75ch" }}>
					<p>Stranica je napravljena u sklopu React JuniorDev tečaja.</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<div>{/* <FontAwesomeIcon icon={faGithub} size="sm" /> */}</div>
				</div>
				<div className="col d-flex flex-column justify-content-center align-items-center">
					<Image className="w-75" style={{ minWidth: "15rem" }} src="./src/assets/2538100.jpg" alt="Profilna slika"></Image>
					<a href="http://www.freepik.com">Image designed by Freepik</a>
				</div>
			</Container>
		</>
	);
}
export default Pocetna;
