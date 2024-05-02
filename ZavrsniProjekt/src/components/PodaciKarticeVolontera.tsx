/* Odlučila sam sve informacije prikazati na kartici umjeto u modalu radi preglednosti, osobno više volim odmah vidjeti sve informacije */

import Card from "react-bootstrap/Card"; /* Image card - kopirano sa sluzbene stranice i modificirano */

interface TipoviVolontera {
	id: number;
	ime: string;
	email: string;
	grad: string;
	aktivnosti: string[];
}

interface PodKartVolProps {
	rez: TipoviVolontera;
}

function KarticaVolontera(props: PodKartVolProps) {
	return (
		<>
			<Card.Text className="p-2">
				{" "}
				{props.rez.ime} {props.rez.email}
				{props.rez.grad}
				{props.rez.aktivnosti}{" "}
			</Card.Text>
		</>
	);
}
export default KarticaVolontera;
