/* Odlučila sam sve informacije prikazati na kartici umjeto u modalu radi preglednosti, osobno više volim odmah vidjeti sve informacije */

import PodaciKarticeVolontera from "./PodaciKarticeVolontera";
import Card from "react-bootstrap/Card"; /* Image card - kopirano sa sluzbene stranice i modificirano */
import Image from "react-bootstrap/Image";

interface TipoviVolontera {
	id: number;
	ime: string;
	email: string;
	grad: string;
	aktivnosti: string[];
}

interface KartVolProps {
	volonteri: TipoviVolontera[];
}

function KarticaVolontera(props: KartVolProps) {
	console.log(props.volonteri);

	return (
		<>
			<Card className="m-2" style={{ width: "18rem" }}>
				<Image className=".card-img-top" src="./src/assets/2538100.jpg" style={{ objectFit: "scale-down" }} />
				<Card.Body>
					<Card.Header>Card Title</Card.Header>
					<Card.Text className="p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
					<Card.Text className="p-2">
						{" "}
						{props.volonteri.map((r) => (
							<PodaciKarticeVolontera key={r.id} rez={r} />
						))}{" "}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}
export default KarticaVolontera;
