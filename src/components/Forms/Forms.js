import FormName from "./FormName";
import FormHouse from "./FormHouse";

function Forms(props) {
	return (
		<section>
			<form onSubmit={(ev) => ev.preventDefault()}>
				<FormName handleForm={props.handleForm} formName={props.formName} />
				<FormHouse handleForm={props.handleForm} formHouse={props.formHouse} />
			</form>
		</section>
	);
}

export default Forms;
