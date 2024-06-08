import Animal from "../animals.js"

class Fish extends Animal {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}

	fishSpeak() {
		return `${this.makeSound()} ${this.name} the ${
			this.constructor.name
		}, says Blub!`
	}
}

export default Fish
