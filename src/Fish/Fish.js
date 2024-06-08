import Animal from "../animals.js"

class Fish extends Animal {
	#fishCapacity
	#currentFishCapacity
	constructor(name, age, lifespan, fishCapacity = 200) {
		super(name, age, lifespan)
		this.#fishCapacity = fishCapacity
		this.#currentFishCapacity = fishCapacity
	}

	fishSpeak() {
		return `${this.makeSound()} ${this.name} the ${
			this.constructor.name
		}, says Blub!`
	}

	fishCapacityIncrease(num) {
		this.#fishCapacity += num
	}
	fishCapacityDecrease(num) {
		this.#fishCapacity -= num
	}

	get currentFishCapacity() {
		return this.#currentFishCapacity
	}
}

export default Fish
