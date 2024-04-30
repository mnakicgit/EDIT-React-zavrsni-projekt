import "../App.css";
import Image from "react-bootstrap/Image";

function Pocetna() {
	return (
		<>
			<div className="flex-wrapper">
				<div className="left">
					<p>Stranica je napravljena u sklopu React JuniorDev tečaja.</p>
					<div>{/* <FontAwesomeIcon icon={faGithub} size="sm" /> */}</div>
				</div>
				<div className="right">
					<Image id="profilna" src="./src/assets/2538100.jpg" alt="Profilna fotografija"></Image>
					<a href="http://www.freepik.com">Designed by Freepik</a>
				</div>
			</div>
		</>
	);
}
export default Pocetna;
