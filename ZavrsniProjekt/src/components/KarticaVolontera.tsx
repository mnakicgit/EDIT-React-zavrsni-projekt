import { Card, Image, ListGroup } from "react-bootstrap";

interface TipoviVolontera {
	id: number;
	ime: string;
	email: string;
	grad: string;
	aktivnosti: string[];
	imageSrc: string;
}

interface KartVolProps {
	volonteri: TipoviVolontera[];
}

function KarticaVolontera(props: KartVolProps) {
	return (
		<div className="col row">
			{props.volonteri.map((volonter) => (
				<div key={volonter.id} className="col-lg-3 col-md-4 col-sm-4 col-6 mb-3 p-1">
					<Card className="" style={{ minWidth: "10rem" }}>
						<Image className="card-img-top" src="./src/assets/2538100.jpg" />
						<Card.Body className="p-0">
							<Card.Header className="card-title w-100">{volonter.ime}</Card.Header>
							<ListGroup className="list-group-flush mb-1">
								<ListGroup.Item>{volonter.grad}</ListGroup.Item>
								<ListGroup.Item>{volonter.aktivnosti.join(" • ")}</ListGroup.Item>
								<ListGroup.Item>{volonter.email}</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
}

export default KarticaVolontera;
