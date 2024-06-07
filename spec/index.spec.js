import Animal from "../src/animals.js";

describe('Animal', () => {
    let newAnimal 

    beforeEach(() => {
        newAnimal = new Animal("Doggo", 3, 13)
    })

    it('should exist as an instance of Animal', () => {
        expect(newAnimal).toBeInstanceOf(Animal)
    })

    it('should be an animal with name, age and lifespan', () => {
        expect(newAnimal.name).toBe('Doggo')
    })

    it('should be an animal with name, age and lifespan', () => {
        expect(newAnimal.age).toBe(3)
    })
    
    it('should be an animal with name, age and lifespan', () => {
        expect(newAnimal.lifespan).toBe(13)
    })

    it('should be able to make a sound', () => {
        expect(newAnimal.makeSound()).toBe('Doggo speaks')
    })
})