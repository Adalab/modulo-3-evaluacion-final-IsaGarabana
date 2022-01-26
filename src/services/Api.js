import { v4 as uuidv4 } from "uuid";

const hocusToApi = (formHouse) => {
	return fetch(`http://hp-api.herokuapp.com/api/characters/house/${formHouse}`)
		.then((response) => response.json())
		.then((data) => {
			const wizardsData = data.map((wizard) => {
				return {
					name: wizard.name,
					species: wizard.species,
					house: wizard.house,
					image: wizard.image,
					status: wizard.alive, //Booleano,
					alternateNames: wizard.alternate_names,
					gender: wizard.gender,
					id: uuidv4(),
				};
			});
			return wizardsData;
		});
};

export default hocusToApi;
