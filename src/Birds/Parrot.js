import Bird from "./Bird.js"

class Parrot extends Bird {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
		this.species = 'Parrot'
	}

	parrotSpeak() {
		return `${this.birdSpeak()}`
	}
}

export default Parrot
