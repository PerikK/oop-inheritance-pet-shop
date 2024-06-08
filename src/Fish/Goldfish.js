import Fish from "./Fish.js"

class Goldfish extends Fish {
	#goldfishStock
	constructor(name, age, lifespan, fishCapacity, goldfishStock = 50) {
		super(name, age, lifespan, fishCapacity)
		this.#goldfishStock = goldfishStock
	}

	goldfishStockInc(num) {
		this.#goldfishStock += num
	}
	goldfishStockDec(num) {
		this.#goldfishStock -= num
	}

	goldfishSpeak() {
		return `${this.fishSpeak()}`
	}
	get goldfishStock() {
		return this.#goldfishStock
	}
}

export default Goldfish