import Wizard from "./Wizard";

function WizardList(props) {
	const wizardElements = props.filteredWizards.map((wizard) => {
		return (
			<li key={wizard.id}>
				<Wizard getSpecies={props.getSpecies} wizard={wizard} />
			</li>
		);
	});
	return (
		<section>
			<ul>
				{props.filteredWizards.length === 0
					? "CONFUNDUS! No existen seres con ese nombre... Prueba con otro"
					: wizardElements}
			</ul>
		</section>
	);
}

export default WizardList;
