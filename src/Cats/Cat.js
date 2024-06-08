import Animal from "../animals.js"

class Cat extends Animal {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}
	catSpeak() {
		return `${this.makeSound()} ${this.name} the ${
			this.constructor.name
		}, says Meeewww!`
	}
}

export default Cat
