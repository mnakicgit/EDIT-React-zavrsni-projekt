import { useState, useEffect } from "react";
import axios from "axios";
import KarticaVolontera from "./KarticaVolontera";
import Container from "react-bootstrap/Container";
import FormaVolontera from "./FormaVolontera";

function Volonteri() {
	const [volonteriSaServera, postaviVolontereSaServera] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/volonteri/")
			.then((vol) => postaviVolontereSaServera(vol.data))
			.catch((err) => alert(err));
	}, []);

	return (
		<>
			<FormaVolontera dodaj={postaviVolontereSaServera} />
			<Container className="row">
				<div className="col-sm-12 col-md-2 order-md-last">Filteri</div>
				<div className="col-sm-12 col-md-10 order-md-first">
					<KarticaVolontera volonteri={volonteriSaServera} />
				</div>
			</Container>
		</>
	);
}
export default Volonteri;
