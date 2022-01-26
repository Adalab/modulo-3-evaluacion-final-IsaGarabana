function FormName(props) {
	const handleInput = () => {
		console.log("hola");
	};

	return (
		<label htmlFor="name">
			Busca por personaje:
			<input type="text" name="name" id="name" onChange={handleInput} />
		</label>
	);
}

export default FormName;
