import Animal from "../animals.js"

class Bird extends Animal {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}

	birdSpeak() {
		return `${this.makeSound()} ${this.name} the ${
			this.constructor.name
		}, says Tweet!`
	}
}

export default Bird
