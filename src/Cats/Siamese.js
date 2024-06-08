import Cat from "./Cat.js"

class Siamese extends Cat {
	#siameseStock
	constructor(name, age, lifespan, catsCapacity, siameseStock = 30) {
		super(name, age, lifespan, catsCapacity)
		this.#siameseStock = siameseStock
	}

	siameseStockInc(num) {
		this.#siameseStock += num
	}
	siameseStockDec(num) {
		this.#siameseStock -= num
	}

	siameseSpeak() {
		return `${this.catSpeak()}`
	}
	get siameseStock() {
		return this.#siameseStock
	}
}

export default Siamese