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
			{/* <Container className="row order-sm-first order-last">
				{/* width: fit-content; ne popravlja problem centriranja 
				VIDI (stavit cards u divove?): https://css-tricks.com/filling-space-last-row-flexbox/ 
				KOMPLICIRANIJE (samo css): https://css-tricks.com/an-auto-filling-css-grid-with-max-columns/
				Ovo funkcionira ako se ne mijenja broj kartica: https://mdbootstrap.com/docs/standard/extended/card-deck/
				
				<div className="col-sm-10 row">
					<KarticaVolontera volonteri={volonteriSaServera} />
				</div>

				<div className="col-sm-2 ">Filteri</div>
			</Container> */}
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
