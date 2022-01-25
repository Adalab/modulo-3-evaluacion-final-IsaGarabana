const callToApi = () => {
	return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor") //Aquí parametrizar el
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
				};
			});
			console.log(shortData);
			return shortData;
		});
};

export default callToApi;
