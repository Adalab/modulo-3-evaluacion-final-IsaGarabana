function FormHouse(props) {
	const handleHouse = (ev) => {
		props.handleForm({
			key: "house",
			value: ev.target.value,
		});
	};
	return (
		<div className="form">
			<label className="form__item" htmlFor="house">
				Selecciona una casa:
				<select name="house" id="house" value={props.formHouse} onChange={handleHouse}>
					<option value="gryffindor">Gryffindor</option>
					<option value="hufflepuff">Hufflepuff</option>
					<option value="ravenclaw">Ravenclaw</option>
					<option value="slytherin">Slytherin</option>
				</select>
			</label>
		</div>
	);
}

export default FormHouse;
