import { useState, useContext, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigacija from "./components/Navigacija"; //koristen react-bootstrap, odvojeno u zasebnu komponentu radi preglednosti

function App() {
	return (
		<>
			<Navigacija />
		</>
	);
}

export default App;
