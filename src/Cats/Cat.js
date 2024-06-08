import Animal from "../animals.js"

class Cat extends Animal {
	#catsCapacity
	#currentCatsCapacity
	constructor(name, age, lifespan, catsCapacity = 100) {
		super(name, age, lifespan)
		this.#catsCapacity = catsCapacity
		this.#currentCatsCapacity = catsCapacity
	}

	catSpeak() {
		return `${this.makeSound()} ${this.name} the ${
			this.constructor.name
		}, says Meeewww!`
	}

	catsCapacityIncrease(num) {
		this.#catsCapacity += num
	}
	catsCapacityDecrease(num) {
		this.#catsCapacity -= num
	}

	get currentCatsCapacity() {
		return this.#currentCatsCapacity
	}
}
export default Cat
