import { Link } from "react-router-dom";
import TranslateSpecies from "../../services/TranslateSpecies";
import getImage from "../../services/GetImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

function WizardDetail(props) {
	const alive = <FontAwesomeIcon icon={faHeart} />;
	const dead = <FontAwesomeIcon icon={faSkull} />;

	const getGender = () => {
		return props.wizard.gender === "male" ? "Masculino" : "Femenino";
	};
	const alternateName = () => {
		return props.wizard.alternate_names.length !== 0
			? props.wizard.alternate_names
			: "No tiene";
	};
	const aliveOrDead = () => {
		return props.wizard.alive ? "Con vida" : "Sin vida";
	};

	return (
		<section>
			<h2> Ficha de Mago</h2>
			<div>
				<img
					className="images"
					src={getImage(props.wizard.name, props.wizard.image)}
					alt={props.wizard.name}
					title={props.wizard.name}
				/>
				<h3>Nombre: {props.wizard.name}</h3>
				<p> Nombre alternativo: {alternateName()}</p>
				<p>Especie: {TranslateSpecies(props.wizard.species, props.wizard.gender)} </p>
				<p>Género: {getGender()} </p>
				<p>Estado: {aliveOrDead()}</p>
				<p>Casa: {props.wizard.house} </p>
			</div>
			<Link to="/">
				<button>Volver al listado</button>
			</Link>
		</section>
	);
}

export default WizardDetail;
