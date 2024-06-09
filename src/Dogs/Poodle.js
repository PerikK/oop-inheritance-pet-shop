import Dog from "./Dog.js";

class Poodle extends Dog {
    constructor(name, age, lifespan) {
        super(name, age, lifespan)
        this.breed = 'Poodle'
    }
    poodleSpeak() {
        return `${this.dogSpeak()}`
    }
}

export default Poodle