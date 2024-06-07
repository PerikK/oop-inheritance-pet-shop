import Animal from "../src/animals.js"
import Dog from "../src/Dogs/Dog.js"

describe("Animal", () => {
	let newAnimal

	beforeEach(() => {
		newAnimal = new Animal("Generic animal", 3, 13)
	})

	it("should exist as an instance of Animal", () => {
		expect(newAnimal).toBeInstanceOf(Animal)
	})

	it("should be an animal with name, age and lifespan", () => {
		expect(newAnimal.name).toBe("Generic animal")
	})

	it("should be an animal with name, age and lifespan", () => {
		expect(newAnimal.age).toBe(3)
	})

	it("should be an animal with name, age and lifespan", () => {
		expect(newAnimal.lifespan).toBe(13)
	})

	it("should be able to make a sound", () => {
		expect(newAnimal.makeSound()).toBe("Generic animal speaks!")
	})
})

describe("Dog", () => {
	let newDog

	beforeEach(() => {
		newDog = new Dog("Doggo", 1, 11, "Poodle")
	})

	it("should exist as an instance of Dog", () => {
		expect(newDog).toBeInstanceOf(Dog)
	})

	it("should be a dog with name, age lifespan and breed", () => {
		expect(newDog.name).toBe("Doggo")
	})

    it("should be able to make a dog sound", () => {
        
		expect(newDog.dogSpeak()).toBe(
			"Doggo speaks! Doggo the Dog, says Woof!"
		)
	})
})
