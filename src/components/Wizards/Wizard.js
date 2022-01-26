function Wizard(props) {
	const getSpecies = () => {
		if (props.wizards.species === "human") {
			return props.wizards.gender === "male" ? "Humano" : "Humana";
		} else if (props.wizards.species === "half-giant") {
			return "Medio-gigante";
		} else if (props.wizards.species === "werewolf") {
			return "Hombre-Lobo";
		} else if (props.wizards.species === "ghost") {
			return "Fantasma";
		}
	};
	return (
		<>
			<a href="">
				<img
					src={
						props.wizards.image === ""
							? `https://via.placeholder.com/300x295/ffffff/666666/?text= ${props.wizards.name} is invisible`
							: props.wizards.image
					}
					alt={props.wizards.name}
					title={props.wizards.name}
				/>
				<h3>Nombre: {props.wizards.name}</h3>
				<p>Especie :{getSpecies()}</p>
			</a>
		</>
	);
}
export default Wizard;
