import Dog from "./Dog.js"

class Husky extends Dog {
	constructor(name, age, lifespan) {
		super(name, age, lifespan)
		this.breed = 'Husky'
	}
	huskySpeak() {
		return `${this.dogSpeak()}`
    }
}

export default Husky