import Wizard from "./Wizard";

function WizardList(props) {
	const wizardElements = props.wizards.map((wizards, index) => {
		return (
			<li key={index}>
				<Wizard wizards={wizards} />
			</li>
		);
	});
	return (
		<section>
			<ul>{wizardElements}</ul>
		</section>
	);
}

export default WizardList;
