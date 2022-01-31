function FormActor(props) {
	const handleInput = (ev) => {
		props.handleForm({
			key: "actor",
			value: ev.currentTarget.value,
		});
	};

	return (
		<label className="form__item" htmlFor="actor">
			Busca por Actor o actriz:
			<input
				type="text"
				name="actor"
				id="actor"
				placeholder="ej:Emma Watts"
				value={props.formActor}
				onChange={handleInput}
			/>
		</label>
	);
}

export default FormActor;
