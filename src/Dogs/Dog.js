import Animal from "../animals.js";

class Dog extends Animal {
    #dogsCapacity
    #currentDogsCapacity
	constructor(name, age, lifespan, breed, dogsCapacity = 100) {
		super(name, age, lifespan)
		this.breed = breed
        this.#dogsCapacity = dogsCapacity
        this.#currentDogsCapacity = dogsCapacity
	}

	dogSpeak() {
		return `${super.makeSound()}! ${this.name} the ${this.breed}, says Woof!`
	}

	dogsCapacityIncrease(num) {
		this.#dogsCapacity += num
	}
	dogsCapacityDecrease(num) {
		this.#dogsCapacity -= num
    }
    
    get currentDogCapacity() {
        return this.#currentDogsCapacity
    }
}

// const dg = new Dogs('Doggo', 3, 13)

// console.log(dg.dogSpeak());
// dg.dogsCapacityIncrease(50);
// console.log(dg.dogsCapacity);

export default Dog