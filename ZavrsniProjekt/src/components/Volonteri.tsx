import { useState, useEffect } from "react";
import axios from "axios";
import KarticaVolontera from "./KarticaVolontera";
import Container from "react-bootstrap/Container";

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
			{/* width: fit-content; ne popravlja problem centriranja 
			VIDI (stavit cards u divove?): https://css-tricks.com/filling-space-last-row-flexbox/ */}
			<Container className="w-100 d-flex flex-wrap justify-content-flex-start">
				<KarticaVolontera volonteri={volonteriSaServera}></KarticaVolontera>
			</Container>
		</>
	);
}
export default Volonteri;
