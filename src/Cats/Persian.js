import Cat from "./Cat.js"

class Persian extends Cat {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
		this.breed = 'Persian'
	}
	persianSpeak() {
		return `${this.catSpeak()}`
	}
}

export default Persian