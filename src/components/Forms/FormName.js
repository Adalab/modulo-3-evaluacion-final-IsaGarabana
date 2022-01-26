function FormName(props) {
	const handleName = (ev) => {
		props.handleForm({
			key: "name",
			value: ev.currentTarget.value,
		});
	};
	return (
		<label htmlFor="name">
			Busca por personaje:
			<input
				type="text"
				name="name"
				id="name"
				value={props.FormName}
				onChange={handleName}
			/>
		</label>
	);
}
export default FormName;
