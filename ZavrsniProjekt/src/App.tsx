import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { StickyContainer, Sticky } from "react-sticky";
import Navigacija from "./components/Navigacija"; //koristen react-bootstrap, odvojeno u zasebnu komponentu radi preglednosti
import Pocetna from "./components/Pocetna";
import Aktivnosti from "./components/Aktivnosti";
import Volonteri from "./components/Volonteri";
import Udruge from "./components/Udruge";
import Footer from "./components/Footer";
import AdminContext from "./components/AdminContext";

function App() {
	const [pocetna, postaviPocetna] = useState(true);
	const [aktivnosti, postaviAktivnosti] = useState(false);
	const [volonteri, postaviVolonteri] = useState(false);
	const [udruge, postaviUdruge] = useState(false);
	const [kontekst, postaviKontekst] = useState(false);

	function promijeniKontekst() {
		postaviKontekst(!kontekst);
	}

	const handleClickPocetna = () => {
		postaviPocetna(true);
		postaviAktivnosti(false);
		postaviVolonteri(false);
		postaviUdruge(false);
	};
	const handleClickAktivnosti = () => {
		postaviPocetna(false);
		postaviAktivnosti(true);
		postaviVolonteri(false);
		postaviUdruge(false);
	};
	const handleClickVolonteri = () => {
		postaviPocetna(false);
		postaviAktivnosti(false);
		postaviVolonteri(true);
		postaviUdruge(false);
	};
	const handleClickUdruge = () => {
		postaviPocetna(false);
		postaviAktivnosti(false);
		postaviVolonteri(false);
		postaviUdruge(true);
	};

	return (
		<>
			<AdminContext.Provider value={kontekst}>
				<Navigacija funPoc={handleClickPocetna} funAkt={handleClickAktivnosti} funVol={handleClickVolonteri} funUdr={handleClickUdruge} promjenaKonteksta={promijeniKontekst} />

				<Container id="page-content-wrapper" className="py-5 my-5 position-relative w-100 d-flex justify-content-center">
					{pocetna && <Pocetna />}
					{aktivnosti && <Aktivnosti />}
					{volonteri && <Volonteri />}
					{udruge && <Udruge />}
				</Container>
			</AdminContext.Provider>

			<Footer />
		</>
	);
}

export default App;
