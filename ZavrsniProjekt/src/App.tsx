import { useState, useContext, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigacija from "./components/Navigacija"; //koristen react-bootstrap, odvojeno u zasebnu komponentu radi preglednosti
import Pocetna from "./components/Pocetna";
import Aktivnosti from "./components/Aktivnosti";
import Volonteri from "./components/Volonteri";
import Udruge from "./components/Udruge";

function App() {
	const [pocetna, prikazPocetnu] = useState(true);
	const [aktivnosti, prikazAktivnosti] = useState(false);
	const [volonteri, prikazVolonteri] = useState(false);
	const [udruge, prikazUdruge] = useState(false);

	return (
		<>
			<Navigacija />

			{pocetna && <Pocetna />}
			{pocetna && <Aktivnosti />}
			{pocetna && <Volonteri />}
			{pocetna && <Udruge />}
		</>
	);
}

export default App;
