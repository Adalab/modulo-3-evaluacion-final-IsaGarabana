import "../styles/App.scss";
import { useState, useEffect } from "react";
import hocusToApi from "../services/Api";
//import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
// import PropTypes from 'prop-types';
import WizardList from "./Wizards/WizardList";
import Forms from "./Forms/Forms";

function App() {
	const getTitle = (text) => <h1 className="title">{text}</h1>;

	const [wizards, setWizards] = useState([]);
	const [formName, setFormName] = useState("");
	const [formHouse, setFormHouse] = useState("gryffindor");
	useEffect(() => {
		hocusToApi(formHouse).then((apiData) => {
			setWizards(apiData);
		});
	}, [formHouse]);

	//Función manejadora de formulario
	const handleForm = (wizardsData) => {
		wizardsData.key === "name"
			? setFormName(wizardsData.value)
			: setFormHouse(wizardsData.value);
	};

	//Filtros en base al formulario
	const filteredWizards = wizards.filter((wizard) => {
		return wizard.name.toLowerCase().includes(formName.toLowerCase());
	});

	return (
		<>
			<header className="title">{getTitle("Harry Potter")}</header>

			<Forms handleForm={handleForm} formName={formName} formHouse={formHouse} />
			<WizardList filteredWizards={filteredWizards} />
		</>
	);
}

export default App;
