function FormHouse(props) {
	return (
		<label htmlFor="house">
			Selecciona la casa:
			<select name="house" id="house">
				<option value="Gryffindor">Gryffindor</option>
				<option value="Hufflepuff">Hufflepuff</option>
				<option value="Ravenclaw">Ravenclaw</option>
				<option value="Slytherin">Slytherin</option>
			</select>
		</label>
	);
}

export default FormHouse;
