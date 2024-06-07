class Animal {
	// - Animals should all have a name, age, expected lifespan and the ability to make a sound
	constructor(name, age, lifespan) {
		this.name = name
		this.age = age
		this.lifespan = lifespan
    }
    
    makeSound() {
        return `${this.name} speaks`
    }
}

export default Animal