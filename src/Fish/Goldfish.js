import Fish from "./Fish.js"

class Goldfish extends Fish {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}

	goldfishSpeak() {
		return `${this.fishSpeak()}`
	}
}

export default Goldfish