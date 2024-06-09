import Bird from "./Bird.js"

class Finch extends Bird {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}
	finchSpeak() {
		return `${this.birdSpeak()}`
	}
}

export default Finch