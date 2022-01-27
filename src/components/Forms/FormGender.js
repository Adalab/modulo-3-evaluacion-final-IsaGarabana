function FormGender(props) {
	const handleGender = (ev) => {
		props.handleForm({
			key: "gender",
			value: ev.target.value,
		});
	};
	return (
		<label className="form__item" htmlFor="gender">
			Selecciona el género:
			<select
				name="gender"
				id="gender"
				value={props.formGender}
				onChange={handleGender}
			>
				<option value="all">Todos</option>
				<option value="female">Femenino</option>
				<option value="male">Masculino</option>
			</select>
		</label>
	);
}
export default FormGender;

//AQUI HAY ERROR
