import Dog from "./Dog.js";

class Poodle extends Dog {
    #poodleStock
    constructor(name, age, lifespan, dogsCapacity, poodleStock) {
        super(name, age, lifespan, dogsCapacity)
        this.#poodleStock = 10
    }

    poodleStockInc(num) {
        // if()
        this.#poodleStock += num
    }
    poodleStockDec(num) {
        this.#poodleStock -= num
    }
    
    poodleSpeak() {
        return `${this.dogSpeak()}`
    }
    get poodleStock() {
        return this.#poodleStock 
    }
}

// const np = new Poodle('Jack', 3, 15, 'Poodle')
// console.log(np.poodleSpeak());
// np.poodleStockDec(2)
// console.log(np.poodleStock);
export default Poodle