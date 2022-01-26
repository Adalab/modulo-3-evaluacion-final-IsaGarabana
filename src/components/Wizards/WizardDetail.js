import { Link } from "react-router-dom";

function WizardDetail(props) {
	return (
		<section>
			<h3> Ficha de Mago</h3>

			<img
				src={
					props.wizard.image === ""
						? `https://via.placeholder.com/300x295/ffffff/666666/?text= ${props.wizard.name} is invisible`
						: props.wizard.image
				}
				alt={props.wizard.name}
				title={props.wizard.name}
			/>
			<h3>Nombre: {props.wizard.name}</h3>
			<p>Especie: {props.wizard.species} </p>
			<p>Género: {props.wizard.gender} </p>
			<p>Casa: {props.wizard.house} </p>
			<Link to="/">
				<button>Volver al listado</button>{" "}
			</Link>
		</section>
	);
}

export default WizardDetail;
