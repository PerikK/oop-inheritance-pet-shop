import Bird from "./Bird.js"

class Sparrow extends Bird {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}
	sparrowSpeak() {
		return `${this.birdSpeak()}`
	}
}

export default Sparrow