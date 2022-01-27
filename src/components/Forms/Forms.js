import FormName from "./FormName";
import FormHouse from "./FormHouse";
import FormGender from "./FormGender";
import Reset from "./Reset";

function Forms(props) {
	return (
		<section>
			<form onSubmit={(ev) => ev.preventDefault()}>
				<FormName handleForm={props.handleForm} formName={props.formName} />
				<FormHouse handleForm={props.handleForm} formHouse={props.formHouse} />
				<FormGender handleForm={props.handleForm} formGender={props.formGender} />
				<Reset handleReset={props.handleReset} />
			</form>
		</section>
	);
}

export default Forms;
