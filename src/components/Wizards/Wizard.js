import { Link } from "react-router-dom";
import TranslateSpecies from "../../services/TranslateSpecies";
function Wizard(props) {
	return (
		<Link to={`/wizard/${props.wizard.id}`}>
			<img
				className="images"
				src={
					props.wizard.image === ""
						? `https://via.placeholder.com/300x295/ffffff/666666/?text= ${props.wizard.name} es invisible`
						: props.wizard.image
				}
				alt={props.wizard.name}
				title={props.wizard.name}
			/>
			<h3>{props.wizard.name}</h3>
			<p>{TranslateSpecies(props.wizard.species, props.wizard.gender)}</p>
		</Link>
	);
}
export default Wizard;
