import Dog from "./Dog.js"

class Husky extends Dog {
	#huskyStock
	constructor(name, age, lifespan, dogsCapacity, huskyStock) {
		super(name, age, lifespan, dogsCapacity)
		this.#huskyStock = 10
	}

	huskyStockInc(num) {
		// if()
		this.#huskyStock += num
	}
	huskyStockDec(num) {
		this.#huskyStock -= num
	}

	huskySpeak() {
		return `${this.dogSpeak()}`
    }
    
	get huskyStock() {
		return this.#huskyStock
	}
}

// const np = new Husky("Jack", 3, 15, "Poodle")
// console.log(np.huskySpeak());
// np.huskyStockDec(2)
// console.log(np.huskyStock)

export default Husky