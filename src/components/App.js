import "../styles/App.scss";
import { useState, useEffect } from "react";
import hocusToApi from "../services/Api";
import { Route, Switch } from "react-router-dom";
// import PropTypes from 'prop-types';
import WizardList from "./Wizards/WizardList";
import Forms from "./Forms/Forms";
import WizardDetail from "./Wizards/WizardDetail";

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

	//Traer la traducción de datos del API (para Wizard y WizardDetail, la pasamos por props)

	const renderWizardDetail = (props) => {
		const routeId = props.match.params.wizardId;
		const foundWizard = wizards.find((wizard) => wizard.id === routeId);
		return <WizardDetail wizard={foundWizard} />;
	};

	return (
		<>
			<header className="title">{getTitle("Harry Potter")}</header>
			<Switch>
				<Route path="/" exact>
					<Forms handleForm={handleForm} formName={formName} formHouse={formHouse} />
					<WizardList filteredWizards={filteredWizards} />
				</Route>
				<Route path="/wizard/:wizardId" exact render={renderWizardDetail} />
			</Switch>
		</>
	);
}

export default App;
