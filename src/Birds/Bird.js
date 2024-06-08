import Animal from "../animals.js"

class Bird extends Animal {
	#birdsCapacity
	#currentBirdsCapacity
	constructor(name, age, lifespan, birdsCapacity = 500) {
		super(name, age, lifespan)
		this.#birdsCapacity = birdsCapacity
		this.#currentBirdsCapacity = birdsCapacity
	}

	birdSpeak() {
		return `${this.makeSound()} ${this.name} the ${
			this.constructor.name
		}, says Tweet!`
	}

	birdsCapacityIncrease(num) {
		this.#birdsCapacity += num
	}
	birdsCapacityDecrease(num) {
		this.#birdsCapacity -= num
	}

	get currentBirdsCapacity() {
		return this.#currentBirdsCapacity
	}
}

export default Bird
