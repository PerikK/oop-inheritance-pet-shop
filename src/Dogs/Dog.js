import Animal from "../animals.js"

class Dog extends Animal {
	#dogsCapacity
	#currentDogsCapacity
	constructor(name, age, lifespan, dogsCapacity = 100) {
		super(name, age, lifespan)
		this.#dogsCapacity = dogsCapacity
		this.#currentDogsCapacity = dogsCapacity
	}

	dogSpeak() {
		return `${this.makeSound()} ${this.name} the ${
			this.constructor.name
		}, says Woof!`
	}

	dogsCapacityIncrease(num) {
		this.#dogsCapacity += num
	}
	dogsCapacityDecrease(num) {
		this.#dogsCapacity -= num
	}

	get currentDogsCapacity() {
		return this.#currentDogsCapacity
	}
}

export default Dog
