import { Link } from "react-router-dom";
import TranslateSpecies from "../../services/TranslateSpecies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

function WizardDetail(props) {
	const alive = <FontAwesomeIcon icon={faHeart} />;
	const dead = <FontAwesomeIcon icon={faSkull} />;

	return (
		<section>
			<h2> Ficha de Mago</h2>
			<div>
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
				<p>{`También se le llama... ${props.wizard.alternate_names}`} </p>
				<p>Especie: {TranslateSpecies(props.wizard.species, props.wizard.gender)} </p>
				<p>Género: {props.wizard.gender === "male" ? "Masculino" : "Femenino"} </p>
				<p>Estado: {props.wizard.alive ? "Con vida" : "Sin vida"}</p>
				<p>Casa: {props.wizard.house} </p>
			</div>
			<Link to="/">
				<button>Volver al listado</button>
			</Link>
		</section>
	);
}

export default WizardDetail;
