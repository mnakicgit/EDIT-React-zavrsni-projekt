import { Card, Image, ListGroup, Button, Modal } from "react-bootstrap";
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
			{props.volonteri.map((volonter) => (
				<div key={volonter.id} className="col-lg-3 col-md-4 col-sm-4 col-6 mb-3 p-1">
					<Card className="" style={{ minWidth: "10rem" }}>
						<Image className="card-img-top" src="./src/assets/2538100.jpg" />
						<Card.Body className="p-0">
							<Card.Header className="card-title d-flex align-items-center justify-content-center" style={{ minHeight: "4.2rem" }}>
								<div className="w-100">{volonter.ime}</div>
							</Card.Header>
							<ListGroup className="list-group-flush mb-1">
								<ListGroup.Item className="d-flex align-items-center justify-content-center">
									<div className="w-100">{volonter.grad}</div>
								</ListGroup.Item>
								<ListGroup.Item className="d-flex align-items-center justify-content-center" style={{ minHeight: "5.6rem" }}>
									<div className="w-100">{volonter.aktivnosti.join(" • ")}</div>
								</ListGroup.Item>
								<ListGroup.Item className="px-1 d-flex align-items-center justify-content-center" style={{ minHeight: "4.2rem" }}>
									<div className="w-100">{volonter.email}</div>
								</ListGroup.Item>
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
				</div>
			))}
		</div>
	);
}

export default KarticaVolontera;
