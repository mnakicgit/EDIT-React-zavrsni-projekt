import { useState } from "react";
import axios from "axios";
import PopisGradova from "../assets/PopisGradova";
import Fab from "@mui/material/Fab";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

interface FormaVolProps {
	dodaj: (stanje: { ime: string; id: string; email: string; grad: string; aktivnosti: string[]; imgSrc: string }) => void;
}

function FormaVolontera(props: FormaVolProps) {
	const [formaPodaci, postaviPodatke] = useState<{
		id: string;
		ime: string;
		email: string;
		grad: string;
		aktivnosti: string[];
		imgSrc: string;
	}>({
		id: "",
		ime: "",
		email: "",
		grad: "",
		aktivnosti: [],
		imgSrc: "",
	});

	// zasto ne radi s jednom funkcijom za sve inpute?
	function promjenaImena(e: React.ChangeEvent<HTMLInputElement>) {
		const { value } = e.target;
		postaviPodatke((prevState) => ({
			...prevState,
			ime: value,
		}));
	}

	function promjenaSelecta(e: React.ChangeEvent<HTMLSelectElement>) {
		const { value } = e.target;
		postaviPodatke((prevState) => ({
			...prevState,
			grad: value,
		}));
	}

	function promjenaCheckboxa(e: React.ChangeEvent<HTMLInputElement>) {
		const { checked, value } = e.target;
		let noveAktivnosti = [...formaPodaci.aktivnosti];

		if (checked) {
			noveAktivnosti.push(value);
		} else {
			noveAktivnosti = noveAktivnosti.filter((aktivnost) => aktivnost !== value);
		}

		postaviPodatke((prevState) => ({
			...prevState,
			aktivnosti: noveAktivnosti,
		}));

		console.log(formaPodaci);
	}

	function promjenaEmaila(e: React.ChangeEvent<HTMLInputElement>) {
		const { value } = e.target;
		postaviPodatke((prevState) => ({
			...prevState,
			email: value,
		}));
	}

	function obradiPodatke(objekt: { ime: string; id: string; email: string; grad: string; aktivnosti: string[]; imgSrc: string }) {
		return {
			ime: objekt.ime,
			id: objekt.id,
			email: objekt.email,
			grad: objekt.grad,
			aktivnosti: objekt.aktivnosti,
			imgSrc: objekt.imgSrc,
		};
	}

	const saljiPodatke: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		// generiraj id

		const zaSlanje = obradiPodatke(formaPodaci);

		axios.post("http://localhost:3001/volonteri", zaSlanje).then((rez) => {
			props.dodaj((stanje) => [...stanje, rez.data]);
		});
	};

	return (
		<>
			<Form onSubmit={saljiPodatke}>
				<FloatingLabel controlId="floatingIme" label="Ime" className="mb-3">
					<Form.Control type="text" placeholder="Unesi ime" value={formaPodaci.ime} onChange={promjenaImena} required />
				</FloatingLabel>

				<FloatingLabel controlId="floatingSelect" label="Grad" className="mb-3">
					<Form.Select aria-label="Odabir grada iz padajuceg izbornika" name="grad" value={formaPodaci.grad} onChange={promjenaSelecta} required>
						{PopisGradova.map((grad) => (
							<option key={grad}>{grad}</option>
						))}
						{/* problem kod sortiranja, č ć na kraju */}
					</Form.Select>
				</FloatingLabel>

				<Form.Check id="checkEdu" label="Edukacija" value="Edukacija" onChange={promjenaCheckboxa} />
				<Form.Check id="checkEko" label="Ekologija" value="Ekologija" onChange={promjenaCheckboxa} />
				<Form.Check id="checkPri" label="Prijevoz" value="Prijevoz" onChange={promjenaCheckboxa} />
				<Form.Check id="checkRaz" label="Razno" value="Razno" onChange={promjenaCheckboxa} />

				<FloatingLabel controlId="floatingEmail" label="Email address" className="my-3">
					<Form.Control type="email" placeholder="name@example.com" value={formaPodaci.email} onChange={promjenaEmaila} required />
				</FloatingLabel>
				<button type="submit">Pošalji</button>
			</Form>
		</>
	);
}

export default FormaVolontera;
