import "../App.css";
import Image from "react-bootstrap/Image";

function Pocetna() {
	return (
		<>
			<div className="flex-wrapper">
				<div className="left">
					<p>Stranica je napravljena u sklopu React JuniorDev tečaja.</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<div>{/* <FontAwesomeIcon icon={faGithub} size="sm" /> */}</div>
				</div>
				<div className="right">
					<Image id="profilna" src="./src/assets/2538100.jpg" alt="Profilna slika"></Image>
					<a href="http://www.freepik.com">Image designed by Freepik</a>
				</div>
			</div>
		</>
	);
}
export default Pocetna;
