import Wizard from "./Wizard";

function WizardList(props) {
	const wizardElements = props.filteredWizards.map((eachWizard) => {
		return (
			<li key={eachWizard.id}>
				<Wizard wizards={eachWizard} />
			</li>
		);
	});
	return (
		<section>
			<ul>
				{props.filteredWizards.length === 0
					? "Hocus Pocus! No existen seres con ese nombre. Prueba con otro"
					: wizardElements}
			</ul>
		</section>
	);
}

export default WizardList;
