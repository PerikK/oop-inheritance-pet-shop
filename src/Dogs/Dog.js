import Animal from "../animals.js"

class Dog extends Animal {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
	}
	dogSpeak() {
		return `${this.makeSound()} ${this.name} the ${
			this.constructor.name
		}, says Woof!`
	}
}

export default Dog
