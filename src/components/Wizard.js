function Wizard(props) {
	console.log(props.wizards.image);

	return props.wizards.image ? (
		<>
			<a href="wizard">
				<img src={props.wizards.image} alt="" title="" />
				<h3>{props.wizards.name}</h3>
				<p>{props.wizards.species}</p>
			</a>
		</>
	) : (
		<>
			<a href="wizard">
				<img
					src={`https://via.placeholder.com/300x295/ffffff/666666/?text= ${props.wizards.name} is gone`}
					alt=""
					title=""
				/>
				<h4>Nombre: {props.wizards.name}</h4>
				<p>Especie: {props.wizards.species}</p>
			</a>
		</>
	);
}
export default Wizard;
