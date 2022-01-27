import gryffindor from "../images/gryffindor.png";
import ravenclaw from "../images/ravenclaw.png";
import hufflepuff from "../images/hufflepuff.png";
import slytherin from "../images/slytherin.png";

const getHouseImage = (house) => {
	switch (house) {
		case "Gryffindor":
			return gryffindor;
		case "Slytherin":
			return slytherin;
		case "Ravenclaw":
			return ravenclaw;
		case "Hufflepuff":
			return hufflepuff;
		default:
			return "";
	}
};

export default getHouseImage;
