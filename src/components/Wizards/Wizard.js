function Wizard(props) {
	return (
		<>
			<a href="">
				<img
					src={
						`${props.wizards.image}` === ""
							? `https://via.placeholder.com/300x295/ffffff/666666/?text= ${props.wizards.name} is invisible`
							: props.wizards.image
					}
					alt={props.wizards.name}
					title={props.wizards.name}
				/>
				<h3>{props.wizards.name}</h3>
				<p>{props.wizards.species}</p>
			</a>
		</>
	);
}
export default Wizard;
