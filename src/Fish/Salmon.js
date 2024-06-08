import Fish from "./Fish.js"

class Salmon extends Fish {
	#salmonStock
	constructor(name, age, lifespan, fishCapacity, salmonStock = 30) {
		super(name, age, lifespan, fishCapacity)
		this.#salmonStock = salmonStock
	}

	salmonStockInc(num) {
		this.#salmonStock += num
	}
	salmonStockDec(num) {
		this.#salmonStock -= num
	}

	salmonSpeak() {
		return `${this.fishSpeak()}`
	}
	get salmonStock() {
		return this.#salmonStock
	}
}

export default Salmon