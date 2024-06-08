import Cat from "./Cat.js"

class Persian extends Cat {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}
	persianSpeak() {
		return `${this.catSpeak()}`
	}
}

export default Persian