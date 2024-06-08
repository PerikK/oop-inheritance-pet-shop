import Dog from "./Dog.js";

class Poodle extends Dog {
    constructor(name, age, lifespan) {
        super(name, age, lifespan)
    }
    poodleSpeak() {
        return `${this.dogSpeak()}`
    }
}

export default Poodle