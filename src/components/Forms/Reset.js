function Reset(props) {
	const handleClick = () => {
		props.handleReset();
	};

	return (
		<button className="form__item button" onClick={handleClick}>
			Limpia tu búsqueda
		</button>
	);
}

export default Reset;
