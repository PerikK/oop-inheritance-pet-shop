import Fish from "./Fish.js"

class Koi extends Fish {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
		this.species = 'Koi'
	}

	salmonSpeak() {
		return `${this.fishSpeak()}`
	}
}

export default Koi
