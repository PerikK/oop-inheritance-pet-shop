import Bird from "./Bird.js"

class Sparrow extends Bird {
	#sparrowStock
	constructor(name, age, lifespan, birdsCapacity, sparrowStock = 20) {
		super(name, age, lifespan, birdsCapacity)
		this.#sparrowStock = sparrowStock
	}

	sparrowStockInc(num) {
		this.#sparrowStock += num
	}
	sparrowStockDec(num) {
		this.#sparrowStock -= num
	}

	sparrowSpeak() {
		return `${this.birdSpeak()}`
	}
	get sparrowStock() {
		return this.#sparrowStock
	}
}

export default Sparrow