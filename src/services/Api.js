const callToApi = () => {
	return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor") //Parametrizar Fetch
		.then((response) => response.json())
		.then((data) => {
			const shortData = data.map((wizard) => {
				return {
					name: wizard.name,
					species: wizard.species,
					house: wizard.house,
					image: wizard.image,
					status: wizard.alive, //Booleano,
					alternateNames: wizard.alternate_names,
					gender: wizard.gender,
					id: wizard.name + wizard.actor,
				};
			});

			return shortData;
		});
};

export default callToApi;
