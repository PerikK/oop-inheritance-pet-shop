import Animal from "../src/animals.js"
import Dog from "../src/Dogs/Dog.js"
import Poodle from "../src/Dogs/Poodle.js"
import Husky from "../src/Dogs/Husky.js"
import Cat from "../src/Cats/Cat.js"
import Persian from "../src/Cats/Persian.js"

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
		newDog = new Dog("Doggo", 1, 11)
	})

	it("should exist as an instance of Dog", () => {
		expect(newDog).toBeInstanceOf(Dog)
	})

	it("should be a dog with name, age and lifespan", () => {
		expect(newDog.name).toBe("Doggo")
	})

	it("should be able to make a dog sound", () => {
		expect(newDog.dogSpeak()).toBe(
			"Doggo speaks! Doggo the Dog, says Woof!"
		)
	})
})

describe("Poodle", () => {
	let newPoodle

	beforeEach(() => {
		newPoodle = new Poodle("Pood", 3, 16)
	})

	it("should exist as an instance of Poodle", () => {
		expect(newPoodle).toBeInstanceOf(Poodle)
	})

	it("should be a Poodle with name, age and lifespan", () => {
		expect(newPoodle.name).toBe("Pood")
	})

	it("should be able to speak and say Woof, it's breed and it's name", () => {
		expect(newPoodle.poodleSpeak()).toBe(
			"Pood speaks! Pood the Poodle, says Woof!"
		)
	})
})

describe("Husky", () => {
	let newHusky

	beforeEach(() => {
		newHusky = new Husky("Husk", 3, 13)
	})
	it("should exist as an instance of Husky", () => {
		expect(newHusky).toBeInstanceOf(Husky)
	})

	it("should be a Husky with name, age and lifespan", () => {
		expect(newHusky.name).toBe("Husk")
	})

	it("should be able to speak and say Woof, it's breed and it's name", () => {
		expect(newHusky.huskySpeak()).toBe(
			"Husk speaks! Husk the Husky, says Woof!"
		)
	})
})

describe("Cat", () => {
	let newCat

	beforeEach(() => {
		newCat = new Cat("Felix", 1, 11)
	})

	it("should exist as an instance of Cat", () => {
		expect(newCat).toBeInstanceOf(Cat)
	})

	it("should be a cat with name, age and lifespan", () => {
		expect(newCat.name).toBe("Felix")
	})

	it("should be able to make a Cat sound", () => {
		expect(newCat.catSpeak()).toBe(
			"Felix speaks! Felix the Cat, says Meeewww!"
		)
	})
})

describe("Persian", () => {
	let newPersian

	beforeEach(() => {
		newPersian = new Persian("Persy", 3, 13)
	})
	it("should exist as an instance of Perisan", () => {
		expect(newPersian).toBeInstanceOf(Persian)
	})

	it("should be a Persian with name, age and lifespan", () => {
		expect(newPersian.name).toBe("Persy")
	})

	it("should be able to speak and say Woof, it's breed and it's name", () => {
		expect(newPersian.persianSpeak()).toBe(
			"Persy speaks! Persy the Persian, says Meeewww!"
		)
	})
})