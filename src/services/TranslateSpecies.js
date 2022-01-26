const TranslateSpecies = (species, gender) => {
	if (species === "human") {
		return gender === "male" ? "Humano" : "Humana";
	} else if (species === "half-giant") {
		return "Medio-gigante";
	} else if (species === "werewolf") {
		return "Hombre-Lobo";
	} else if (species === "ghost") {
		return "Fantasma";
	}
	return species;
};

export default TranslateSpecies;
