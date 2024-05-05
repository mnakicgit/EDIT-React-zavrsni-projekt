import { Card, Image, ListGroup, Button, CardGroup } from "react-bootstrap";
import { useContext } from "react";
import axios from "axios";
import AdminContext from "./AdminContext";

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
	prikaziIzbrisi: boolean;
	prikaziPromijeni: boolean;
	zatvoriOffcanvas: () => void;
	otvoriOffcanvas: () => void;
	postaviIdZaPromjenu: (id: string) => void;
}

const izbrisiVolontera = (id: number) => {
	axios
		.delete(`http://localhost:3001/volonteri/${id}`)
		.then(() => {
			alert("Volonter je uspjesno izbrisan. Promjena neće biti vidljiva dok ponovno ne učitate stranicu.");
		})
		.catch(() => {
			alert("Volonter je već izbrisan.");
		});
};

function KarticaVolontera(props: KartVolProps) {
	const kontekst = useContext(AdminContext);
	return (
		<div className="col row">
			<CardGroup>
				{props.volonteri.map((volonter) => (
					<Card key={volonter.id} className="col-lg-3 col-md-4 col-sm-4 col-6 m-2" style={{ minWidth: "10rem", border: "1px solid #cccccc", borderRadius: "5px" }}>
						<Image className="card-img-top" src="./src/assets/2538100.jpg" style={{ borderRadius: "5px" }} />
						<Card.Body className="p-0">
							<Card.Header className="card-title w-100">{volonter.ime}</Card.Header>
							<ListGroup className="list-group-flush mb-1">
								<ListGroup.Item>{volonter.grad}</ListGroup.Item>
								<ListGroup.Item>{volonter.aktivnosti.join(" • ")}</ListGroup.Item>
								<ListGroup.Item>{volonter.email}</ListGroup.Item>
							</ListGroup>
							{kontekst && (
								<>
									{props.prikaziPromijeni && (
										<Button
											variant="info"
											className="mb-3 m-1"
											onClick={() => {
												props.otvoriOffcanvas();
												props.postaviIdZaPromjenu(volonter.id.toString());
											}}
										>
											Promijeni
										</Button>
									)}
									{props.prikaziIzbrisi && (
										<Button variant="danger" className="mb-3 m-1" onClick={() => izbrisiVolontera(volonter.id)}>
											Izbriši
										</Button>
									)}
								</>
							)}
						</Card.Body>
					</Card>
				))}
			</CardGroup>
		</div>
	);
}

export default KarticaVolontera;
