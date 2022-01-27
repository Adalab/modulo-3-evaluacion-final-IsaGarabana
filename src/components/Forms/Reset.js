function Reset(props) {
	const handleClick = () => {
		props.handleReset();
	};

	return <button onClick={handleClick}>Limpia la búsqueda</button>;
}

export default Reset;
