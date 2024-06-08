import Cat from "./Cat.js"

class Siamese extends Cat {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}
	siameseSpeak() {
		return `${this.catSpeak()}`
	}
}

export default Siamese
