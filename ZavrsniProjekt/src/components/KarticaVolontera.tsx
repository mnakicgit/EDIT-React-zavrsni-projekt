/* Odlučila sam sve informacije prikazati na kartici umjeto u modalu radi preglednosti, osobno više volim odmah vidjeti sve informacije */

import Card from "react-bootstrap/Card"; /* Image card - kopirano sa sluzbene stranice i modificirano */
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

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
	{
		props.volonteri.map((volonter) => {
			volonter.aktivnosti.sort();
		});
	}

	console.log(props.volonteri);

	return (
		<>
			{props.volonteri.map((volonter) => (
				<Card className="m-2" style={{ width: "16rem" }} key={volonter.id}>
					<Image className=".card-img-top" src="./src/assets/2538100.jpg" style={{ objectFit: "scale-down" }} />
					<Card.Body className="p-0">
						<Card.Header className="card-title w-100">{volonter.ime}</Card.Header>

						<ListGroup className="list-group-flush">
							<ListGroup.Item>{volonter.grad}</ListGroup.Item>
							<ListGroup.Item>{volonter.aktivnosti.join(" • ")}</ListGroup.Item>
							<ListGroup.Item>{volonter.email}</ListGroup.Item>
						</ListGroup>
					</Card.Body>
				</Card>
			))}
		</>
	);
}
export default KarticaVolontera;
