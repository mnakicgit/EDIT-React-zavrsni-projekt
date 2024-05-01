import { useState, useContext, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navigacija from "./components/Navigacija"; //koristen react-bootstrap, odvojeno u zasebnu komponentu radi preglednosti
import Pocetna from "./components/Pocetna";
import Aktivnosti from "./components/Aktivnosti";
import Volonteri from "./components/Volonteri";
import Udruge from "./components/Udruge";
import Footer from "./components/Footer";

function App() {
	const [pocetna, prikazPocetna] = useState(true);
	const [aktivnosti, prikazAktivnosti] = useState(false);
	const [volonteri, prikazVolonteri] = useState(false);
	const [udruge, prikazUdruge] = useState(false);

	return (
		<>
			<Navigacija />

			<Container id="page-content-wrapper" className="py-5 my-5 position-relative w-100 d-flex justify-content-center">
				{pocetna && <Pocetna />}
				{aktivnosti && <Aktivnosti />}
				{volonteri && <Volonteri />}
				{udruge && <Udruge />}
			</Container>

			<Footer />
		</>
	);
}

export default App;
