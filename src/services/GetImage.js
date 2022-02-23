function getImage(name, image) {
	return image === ""
		? `https://dummyimage.com/200x300/432f4d/ffa500.png&text=${name},+is now invisible.`
		: image;
}

export default getImage;
