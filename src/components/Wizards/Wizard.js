import { Link } from "react-router-dom";
function Wizard(props) {
	const getSpecies = () => {
		if (props.wizard.species === "human") {
			return props.wizard.gender === "male" ? "Humano" : "Humana";
		} else if (props.wizard.species === "half-giant") {
			return "Medio-gigante";
		} else if (props.wizard.species === "werewolf") {
			return "Hombre-Lobo";
		} else if (props.wizard.species === "ghost") {
			return "Fantasma";
		}
	};
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
			<h3>Nombre: {props.wizard.name}</h3>
			<p>Especie :{getSpecies()}</p>
		</Link>
	);
}
export default Wizard;
