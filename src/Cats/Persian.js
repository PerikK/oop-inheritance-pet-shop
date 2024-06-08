import Cat from "./Cat.js"

class Persian extends Cat {
	#persianStock
	constructor(name, age, lifespan, catsCapacity, persianStock = 25) {
		super(name, age, lifespan, catsCapacity)
		this.#persianStock = persianStock
	}

	persianStockInc(num) {
		this.#persianStock += num
	}
	persianStockDec(num) {
		this.#persianStock -= num
	}

	persianSpeak() {
		return `${this.catSpeak()}`
	}
	get persianStock() {
		return this.#persianStock
	}
}

export default Persian