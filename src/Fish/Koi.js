import Fish from "./Fish.js"

class Koi extends Fish {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}

	salmonSpeak() {
		return `${this.fishSpeak()}`
	}
}

export default Koi
