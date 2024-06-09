import Bird from "./Bird.js"

class Finch extends Bird {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
		this.species = 'Finch'
	}
	finchSpeak() {
		return `${this.birdSpeak()}`
	}
}

export default Finch