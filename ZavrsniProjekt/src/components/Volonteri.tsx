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
	// const [filtriraniVolonteri, postaviFiltriraneVolontere] = useState([]); //mozda bolje imati vise poziva prema serveru nego opterecivati klijenta??
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	const [filteri, postaviFiltere] = useState({
		grad: "",
		edu: false,
		eko: false,
		pri: false,
		raz: false,
	});

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
			{/* odvoji naslovni banner u zasebnu komponentu */}
			<Container className="p-0">
				<Container fluid className="bg-body-secondary rounded-4 mb-5 p-4">
					<Row>
						<h1 className="mb-4" style={{ textAlign: "left" }}>
							Volonteri
						</h1>
					</Row>
					<Row>
						<Col className="col-sm-12 col-md-10" style={{ textAlign: "left" }}>
							{kontekst && (
								<div className="d-flex mb-4">
									<h4 style={{ marginRight: "2rem", marginBottom: "0" }}>Dodaj novog volontera</h4>
									<div>
										<Button variant="primary" onClick={handleShow}>
											Dodaj
										</Button>
									</div>
								</div>
							)}
							<p className="m-0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</Col>
					</Row>
				</Container>
				<Row>
					<Col className="col-12 col-sm-12 col-md-2 order-md-last">
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
					<Col className="col-sm-12 col-md-10 order-md-first">
						<KarticaVolontera volonteri={volonteriSaServera} />
					</Col>
				</Row>
			</Container>

			{/* offcanvas se ne zatvori nakon submita, prosljedi i pozovi handleClose  */}
			<Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Prijavi se!</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<FormaVolontera dodaj={postaviVolontereSaServera} zatvoriOnSubmit={handleClose} />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}
export default Volonteri;
