import { Link } from "react-router-dom";
import TranslateSpecies from "../../services/TranslateSpecies";
import getImage from "../../services/GetImage";

function Wizard(props) {
	return (
		<Link to={`/wizard/${props.wizard.id}`}>
			<img
				className="wizardList__item--image"
				src={getImage(props.wizard.name, props.wizard.image)}
				alt={props.wizard.name}
				title={props.wizard.name}
			/>
			<h3>{props.wizard.name}</h3>
			<p>{TranslateSpecies(props.wizard.species, props.wizard.gender)}</p>
		</Link>
	);
}
export default Wizard;
