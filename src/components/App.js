import "../styles/App.scss";
import { useState, useEffect } from "react";
import callToApi from "../services/Api";
//import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
// import PropTypes from 'prop-types';
import WizardList from "./Wizards/WizardList";
import Forms from "./Forms/Forms";

function App() {
	const getTitle = (text) => <h1 className="title">{text}</h1>;

	const [wizards, setWizards] = useState([]);

	useEffect(() => {
		callToApi().then((wizardsData) => {
			setWizards(wizardsData);
		});
	}, []);
	return (
		<>
			<header className="title">{getTitle("Harry Potter")}</header>

			<section>
				<form>
					<Forms />
				</form>
			</section>
			<section>
				<ul>
					<WizardList wizards={wizards} />
				</ul>
			</section>
		</>
	);
}

export default App;
