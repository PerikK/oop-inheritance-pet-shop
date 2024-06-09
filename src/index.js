// 3. The business owner should be able to open multiple different pet shops with their own limits and animals

// 4.The pet shop should have a hard limit for every main type of animal
//     - E.g. the shop can only store a max number of total fish

import Poodle from "./Dogs/Poodle.js"
import Husky from "./Dogs/Husky.js"
import Persian from "./Cats/Persian.js"
import Siamese from "./Cats/Siamese.js"
import Parrot from "./Birds/Parrot.js"
import Finch from "./Birds/Finch.js"
import Goldfish from "./Fish/Goldfish.js"
import Koi from "./Fish/Koi.js"

class Pet_Shop {
	constructor(area) {
		this.area = area
		this.pets = []
		this.dogsCapacity = {}
		this.birdsCapacity = {}
		this.catsCapacity = {}
		this.fishCapacity = {}

		switch (true) {
			case area < 150:
				throw new Error("Not enough space for a pet-shop")
			case area <= 200:
				this.maxPetCapacity = 100

				this.dogsCapacity.poodle = 7
				this.dogsCapacity.husky = 3

				this.catsCapacity.persian = 10
				this.catsCapacity.siamese = 10

				this.birdsCapacity.parrot = 15
				this.birdsCapacity.finch = 20

				this.fishCapacity.goldfish = 25
				this.fishCapacity.koi = 10
				break
			case area <= 300:
				this.maxPetCapacity = 150

				this.dogsCapacity.poodle = 10
				this.dogsCapacity.husky = 5

				this.catsCapacity.persian = 15
				this.catsCapacity.siamese = 15

				this.birdsCapacity.parrot = 23
				this.birdsCapacity.finch = 30

				this.fishCapacity.goldfish = 40
				this.fishCapacity.koi = 20
				break
			case area > 300:
				this.maxPetCapacity = 200

				this.dogsCapacity.poodle = 15
				this.dogsCapacity.husky = 8

				this.catsCapacity.persian = 20
				this.catsCapacity.siamese = 20

				this.birdsCapacity.parrot = 30
				this.birdsCapacity.finch = 40

				this.fishCapacity.goldfish = 50
				this.fishCapacity.koi = 20
				break
			case area < 150:
				throw new Error("Not enough space for a pet-shop")
			default:
				throw new Error("Area must be provided")
		}
	}
}

// const ps = new Pet_Shop(111)

// console.log(ps.maxPetCapacity)
// console.log(ps.birdsCapacity.finch)

// console.log(ps.log());

export default Pet_Shop
