import { useState, useContext, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigacija from "./components/Navigacija"; //koristen react-bootstrap, odvojeno u zasebnu komponentu radi preglednosti
import Pocetna from "./components/Pocetna";
import Aktivnosti from "./components/Aktivnosti";
import Volonteri from "./components/Volonteri";
import Udruge from "./components/Udruge";
import Footer from "./components/Footer";

function App() {
	const [pocetna, prikazPocetna] = useState(false);
	const [aktivnosti, prikazAktivnosti] = useState(false);
	const [volonteri, prikazVolonteri] = useState(true);
	const [udruge, prikazUdruge] = useState(false);

	return (
		<>
			<Navigacija />

			<div id="page-content-wrapper">
				{pocetna && <Pocetna />}
				{aktivnosti && <Aktivnosti />}
				{volonteri && <Volonteri />}
				{udruge && <Udruge />}
			</div>

			<Footer />
		</>
	);
}

export default App;
