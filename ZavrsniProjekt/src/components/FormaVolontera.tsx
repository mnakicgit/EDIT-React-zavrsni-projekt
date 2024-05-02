import { FormEventHandler, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

interface FormaVolProps {
	dodaj: (stanje: { ime: string; id: string; email: string; grad: string; aktivnosti: string[]; imgSrc: string }) => void;
}

function FormaVolontera(props: FormaVolProps) {
	const [formaPodaci, postaviPodatke] = useState({
		id: "",
		ime: "",
		email: "",
		grad: "",
		aktivnosti: [],
		imgSrc: "",
	});

	function promjenaUlaza(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		postaviPodatke({ ...formaPodaci, [name]: value });
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

	const saljiPodatke: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		console.log(formaPodaci);

		const zaSlanje = obradiPodatke(formaPodaci);

		axios.post("http://localhost:3001/volonteri", zaSlanje).then((rez) => {
			props.dodaj((stanje) => [...stanje, rez.data]);
		});
	};
	return (
		<>
			<form onSubmit={saljiPodatke}>
				<label>
					Ime:
					<input type="text" name="ime" value={formaPodaci.ime} onChange={promjenaUlaza} required />
				</label>
				<button type="submit">Novi </button>
			</form>
		</>
	);
}

export default FormaVolontera;
