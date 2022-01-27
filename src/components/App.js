import "../styles/App.scss";
import { useState, useEffect } from "react";
import hocusToApi from "../services/Api";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import WizardList from "./Wizards/WizardList";
import Forms from "./Forms/Forms";
import WizardDetail from "./Wizards/WizardDetail";

function App() {
	const [wizards, setWizards] = useState([]);
	const [formName, setFormName] = useState("");
	const [formHouse, setFormHouse] = useState("gryffindor");
	const [formGender, setFormGender] = useState("all");

	//API
	useEffect(() => {
		hocusToApi(formHouse).then((apiData) => {
			setWizards(apiData);
		});
	}, [formHouse]);

	//Función manejadora de formulario
	const handleForm = (wizardsData) => {
		if (wizardsData.key === "name") {
			setFormName(wizardsData.value);
		} else if (wizardsData.key === "house") {
			setFormHouse(wizardsData.value);
		} else if (wizardsData.key === "gender") {
			setFormGender(wizardsData.value);
		}
	};

	//Filtros en base al formulario
	const filteredWizards = wizards
		.filter((wizard) => wizard.name.toLowerCase().includes(formName.toLowerCase()))
		.filter((wizard) =>
			formGender === "all" ? true : wizard.gender === formGender
		)
		.sort((a, b) => a.name.localeCompare(b.name));

	//Botón de reset
	const handleReset = () => {
		setFormName("");
		setFormHouse("gryffindor");
		setFormGender("all");
	};

	//Pintar El detalle de tarjeta en una ruta distinta
	const renderWizardDetail = (props) => {
		const routeId = props.match.params.wizardId;
		const foundWizard = wizards.find((wizard) => wizard.id === routeId);
		return <WizardDetail wizard={foundWizard} />;
	};

	return (
		<>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Forms
						handleForm={handleForm}
						formName={formName}
						formHouse={formHouse}
						formGender={formGender}
						handleReset={handleReset}
					/>
					<WizardList filteredWizards={filteredWizards} />
				</Route>
				<Route path="/wizard/:wizardId" exact render={renderWizardDetail} />
			</Switch>
		</>
	);
}

export default App;
