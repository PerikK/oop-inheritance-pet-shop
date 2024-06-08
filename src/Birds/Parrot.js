import Bird from "./Bird.js"

class Parrot extends Bird {
	#parrotStock
	constructor(name, age, lifespan, birdsCapacity, parrotStock = 35) {
		super(name, age, lifespan, birdsCapacity)
		this.#parrotStock = parrotStock
	}

	parrotStockInc(num) {
		this.#parrotStock += num
	}
	parrotStockDec(num) {
		this.#parrotStock -= num
	}

	parrotSpeak() {
		return `${this.birdSpeak()}`
	}
	get parrotStock() {
		return this.#parrotStock
	}
}

export default Parrot