import Animal from "../animals.js";
import Dog from "./Dog.js";

	//Animal  constructor(name, age, lifespan) {
	// 	this.name = name
	// 	this.age = age
	// 	this.lifespan = lifespan
    // }
    
    // makeSound() {
    //     return `${this.name} speaks`
    // }
// class Dogs extends Animal {
//     constructor(name, age, lifespan, race) {
//         super(name, age, lifespan)
//         this.race = race
//     }

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
        this.poodleStock -= num
    }
    
    poodleSpeak() {
        return `${this.dogSpeak()}`
    }
}

const np = new Poodle('Jack', 3, 15, 'Poodle')
console.log(np.poodleSpeak());
export default Poodle