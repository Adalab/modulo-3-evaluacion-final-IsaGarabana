function getImage(name, image) {
	return image === ""
		? `https://dummyimage.com/200x300/c77ec7/050505.png&text=${name},+invisible.`
		: image;
}

export default getImage;
