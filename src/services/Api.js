const hocusToApi = (formHouse) => {
	return fetch(`http://hp-api.herokuapp.com/api/characters/house/${formHouse}`)
		.then((response) => response.json())
		.then((data) => {
			const wizardsData = data.map((wizard, index) => {
				return {
					name: wizard.name,
					species: wizard.species,
					house: wizard.house,
					image: wizard.image,
					alive: wizard.alive,
					alternate_names: wizard.alternate_names,
					gender: wizard.gender,
					id: wizard.name.replace(" ", "-") + "-" + index,
				};
			});
			return wizardsData;
		});
};

export default hocusToApi;
