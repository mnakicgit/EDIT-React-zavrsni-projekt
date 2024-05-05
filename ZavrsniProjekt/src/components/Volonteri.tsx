import { useState, useEffect, useContext } from "react";
import AdminContext from "./AdminContext";
import axios from "axios";
import KarticaVolontera from "./KarticaVolontera";
import FormaVolontera from "./FormaVolontera";
import FilteriVolontera from "./FIlteriVolontera"; // za odvojiti kasnije
import PopisGradova from "../assets/PopisGradova";
import { Button, Container, Offcanvas, Row, Col, Form } from "react-bootstrap";

function Volonteri() {
	const kontekst = useContext(AdminContext);
	const [volonteriSaServera, postaviVolontereSaServera] = useState([]);
	// const [filtriraniVolonteri, postaviFiltriraneVolontere] = useState([]); //ipak sam trebala na ovaj nacin, bolje imati sto manje poziva prema serveru
	const [deleteButtons, setDeleteButtons] = useState(false);
	const [modifyButtons, setModifyButtons] = useState(false);
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	const [idZaPromjenu, postaviIdZaPromjenu] = useState("");

	const [filteri, postaviFiltere] = useState({
		grad: "",
		edu: false,
		eko: false,
		pri: false,
		raz: false,
	});

	const prikaziIzbrisi = () => setDeleteButtons(!deleteButtons);
	const prikaziPromijeni = () => setModifyButtons(!modifyButtons);
	const handleClose = () => setShowOffcanvas(false);
	const handleShow = () => setShowOffcanvas(true);

	useEffect(() => {
		axios
			.get("http://localhost:3001/volonteri/")
			.then((vol) => postaviVolontereSaServera(vol.data))
			.catch((err) => alert(err));
	}, []);

	const primjeniFiltere = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		axios
			.get("http://localhost:3001/volonteri/")
			.then((response) => {
				let filtrirani = response.data;

				if (filteri.grad) {
					filtrirani = filtrirani.filter((volonter: { grad: string }) => volonter.grad === filteri.grad);
				}

				if (filteri.edu) {
					filtrirani = filtrirani.filter((volonter: { aktivnosti: string | string[] }) => volonter.aktivnosti.includes("Edukacija"));
				}

				if (filteri.eko) {
					filtrirani = filtrirani.filter((volonter: { aktivnosti: string | string[] }) => volonter.aktivnosti.includes("Ekologija"));
				}

				if (filteri.pri) {
					filtrirani = filtrirani.filter((volonter: { aktivnosti: string | string[] }) => volonter.aktivnosti.includes("Prijevoz"));
				}

				if (filteri.raz) {
					filtrirani = filtrirani.filter((volonter: { aktivnosti: string | string[] }) => volonter.aktivnosti.includes("Razno"));
				}

				postaviVolontereSaServera(filtrirani);
			})
			.catch((error) => console.error(error));
	};

	const ocistiFiltere = () => {
		postaviFiltere({
			grad: "",
			edu: false,
			eko: false,
			pri: false,
			raz: false,
		});
	};

	const handleGradChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedGrad = event.target.value;
		postaviFiltere((prevFilteri) => ({
			...prevFilteri,
			grad: selectedGrad,
		}));
	};

	const handleEduChange = () => {
		postaviFiltere((prevFilteri) => ({
			...prevFilteri,
			edu: !prevFilteri.edu,
		}));
	};

	const handleEkoChange = () => {
		postaviFiltere((prevFilteri) => ({
			...prevFilteri,
			eko: !prevFilteri.eko,
		}));
	};

	const handlePriChange = () => {
		postaviFiltere((prevFilteri) => ({
			...prevFilteri,
			pri: !prevFilteri.pri,
		}));
	};

	const handleRazChange = () => {
		postaviFiltere((prevFilteri) => ({
			...prevFilteri,
			raz: !prevFilteri.raz,
		}));
	};

	return (
		<>
			{/* odvoji naslovni banner u zasebnu komponentu kako bi oblikovanje sigurno bilo konzistentno... */}
			<Container className="p-0">
				<Container fluid className="bg-body-secondary rounded-4 mb-3 p-4">
					<Row>
						<h1 className="mb-4" style={{ textAlign: "left" }}>
							Volonteri
						</h1>
					</Row>
					<Row>
						<Col style={{ textAlign: "left" }}>
							<p>
								Ostale stranice nisam stigla dovršiti, ali ova je stranica potpuno dovršena. Pazila sam na detalje i potrudila se da ima sve elemente: ulogu admina, komunikaciju sa serverom, filtere,
								lijep raspored, responzivnost...
							</p>
							<p className="m-0">
								Radi preglednosti sam sve podatke o volonterima odlučila prikazati u karticama umjesto u <i>modal</i> prozoru. Osobno više volim odjednom vidjeti sve informacije.
							</p>
						</Col>
					</Row>
				</Container>

				{kontekst && (
					<Container fluid className="bg-body-tertiary rounded-4 p-2">
						{/* <Row>
							<h4 style={{ marginBottom: "1.2rem" }}>Upravljanje popisom volontera</h4>
						</Row> 
						<Row>*/}
						<div>
							<Button variant="primary" onClick={handleShow} className="m-2">
								Dodaj
							</Button>

							<Button variant={modifyButtons ? "info" : "primary"} onClick={prikaziPromijeni} className="m-2">
								Promijeni
							</Button>

							<Button variant={deleteButtons ? "info" : "primary"} onClick={prikaziIzbrisi} className="m-2">
								Izbriši
							</Button>
						</div>
						{/* </Row> */}
					</Container>
				)}

				<Row>
					<Col className="col-12 col-sm-12 col-md-2 order-md-last mt-5">
						<h5>Filteri</h5>
						<Form onSubmit={primjeniFiltere}>
							<Form.Select className="m-2" aria-label="Odabir grada iz padajuceg izbornika" name="grad" onChange={handleGradChange} value={filteri.grad}>
								<option value="" selected>
									Svi gradovi
								</option>
								{PopisGradova.map((grad) => (
									<option key={grad}>{grad}</option>
								))}
								{/* problem kod sortiranja, č ć na kraju */}
							</Form.Select>
							<div className="m-2 d-flex flex-column align-items-start">
								<Form.Check id="checkEdu" label="Edukacija" checked={filteri.edu} onChange={handleEduChange} inline />
								<Form.Check id="checkEko" label="Ekologija" checked={filteri.eko} onChange={handleEkoChange} inline />
								<Form.Check id="checkPri" label="Prijevoz" checked={filteri.pri} onChange={handlePriChange} inline />
								<Form.Check id="checkRaz" label="Razno" checked={filteri.raz} onChange={handleRazChange} inline />
							</div>
							<button className="m-2" type="submit">
								Primjeni filtere
							</button>
							<button className="m-2" onClick={ocistiFiltere}>
								Očisti filtere
							</button>
						</Form>
					</Col>
					<Col className="col-sm-12 col-md-10 order-md-first mt-5">
						<KarticaVolontera
							volonteri={volonteriSaServera}
							prikaziIzbrisi={deleteButtons}
							prikaziPromijeni={modifyButtons}
							zatvoriOffcanvas={handleClose}
							otvoriOffcanvas={handleShow}
							postaviIdZaPromjenu={postaviIdZaPromjenu}
						/>
					</Col>
				</Row>
			</Container>

			<Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Upiši podatke o volonteru</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<FormaVolontera dodaj={postaviVolontereSaServera} zatvoriOnSubmit={handleClose} idZaPromjenu={idZaPromjenu} />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}
export default Volonteri;
