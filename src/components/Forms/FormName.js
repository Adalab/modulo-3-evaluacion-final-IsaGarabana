function FormName(props) {
	const handleName = (ev) => {
		props.handleForm({
			key: "name",
			value: ev.currentTarget.value,
		});
	};
	return (
		<label className="form__item" htmlFor="name">
			Busca por personaje:
			<input
				type="text"
				name="name"
				id="name"
				value={props.formName}
				onChange={handleName}
			/>
		</label>
	);
}
export default FormName;
