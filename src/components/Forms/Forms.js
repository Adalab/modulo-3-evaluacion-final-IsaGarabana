import FormName from "./FormName";
import FormHouse from "./FormHouse";
import FormGender from "./FormGender";
import FormActor from "./FormActor";
import Reset from "./Reset";

function Forms(props) {
	return (
		<section>
			<h2> Buscador de personajes</h2>
			<form onSubmit={(ev) => ev.preventDefault()}>
				<FormName handleForm={props.handleForm} formName={props.formName} />
				<FormHouse handleForm={props.handleForm} formHouse={props.formHouse} />
				<FormGender handleForm={props.handleForm} formGender={props.formGender} />
				<FormActor formActor={props.formActor} handleForm={props.handleForm} />
				<Reset handleReset={props.handleReset} />
			</form>
		</section>
	);
}

export default Forms;
