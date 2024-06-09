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
		this.dogsCapacity = {}
		this.birdsCapacity = {}
		this.catsCapacity = {}
		this.fishCapacity = {}
		this.pets = []

		this.constructors = {
			Husky: Husky,
			Poodle: Poodle,
			Siamese: Siamese,
			Persian: Persian,
			Parrot: Parrot,
			Finch: Finch,
			Goldfish: Goldfish,
			Koi: Koi,
		}
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

	checkCapacity(spec_breed) {
		const sb =
			spec_breed.charAt(0).toUpperCase() + spec_breed.slice(1)
		let capacityCategory

		switch (sb.toLowerCase()) {
			case "poodle":
			case "husky":
				capacityCategory = this.dogsCapacity
				break
			case "persian":
			case "siamese":
				capacityCategory = this.catsCapacity
				break
			case "parrot":
			case "finch":
				capacityCategory = this.birdsCapacity
				break
			case "goldfish":
			case "koi":
				capacityCategory = this.fishCapacity
				break
			default:
				throw new Error(`No capacity found for ${sb}`)
		}

		if (capacityCategory[sb.toLowerCase()] <= 0) {
			throw new Error(`There is no more space for a ${sb}`)
		}
	}

	decreaseCapacity(spec_breed) {
		const sb =
			spec_breed.charAt(0).toUpperCase() + spec_breed.slice(1)
		let capacityCategory

		switch (sb.toLowerCase()) {
			case "poodle":
			case "husky":
				capacityCategory = this.dogsCapacity
				break
			case "persian":
			case "siamese":
				capacityCategory = this.catsCapacity
				break
			case "parrot":
			case "finch":
				capacityCategory = this.birdsCapacity
				break
			case "goldfish":
			case "koi":
				capacityCategory = this.fishCapacity
				break
			default:
				throw new Error(`No capacity found for ${sb}`)
		}

		if (capacityCategory[sb.toLowerCase()] <= 0) {
			throw new Error(`There is no more space for a ${sb}`)
		}

		capacityCategory[sb.toLowerCase()]--
	}

	increaseCapacity(spec_breed) {
		const sb =
			spec_breed.charAt(0).toUpperCase() + spec_breed.slice(1)
		let capacityCategory

		switch (sb.toLowerCase()) {
			case "poodle":
			case "husky":
				capacityCategory = this.dogsCapacity
				break
			case "persian":
			case "siamese":
				capacityCategory = this.catsCapacity
				break
			case "parrot":
			case "finch":
				capacityCategory = this.birdsCapacity
				break
			case "goldfish":
			case "koi":
				capacityCategory = this.fishCapacity
				break
			default:
				throw new Error(`No capacity found for ${sb}`)
		}

		capacityCategory[sb.toLowerCase()]++
	}

	addPet(name, age, ls, spec_breed) {
		try {
			if (!spec_breed) {
				throw new Error("Species / breed must be provided")
			}

			if (typeof spec_breed !== "string") {
				throw new Error("Species / breed must be a string")
			}

			this.checkCapacity(spec_breed)

			this.decreaseCapacity(spec_breed)

			const sb =
				spec_breed.charAt(0).toUpperCase() + spec_breed.slice(1)
			const Constructor = this.constructors[sb]

			if (!Constructor) {
				throw new Error(
					`${this.constructor.name} does not stock ${sb}`
				)
			}

			const newPet = new Constructor(name, age, ls, spec_breed)
			this.pets.push(newPet)
		} catch (error) {
			throw new Error(error.message)
		}
	}
}

export default Pet_Shop

// const ps = new Pet_Shop(211)
// console.log(ps.maxPetCapacity)
// console.log(ps.birdsCapacity.finch)
// console.log(ps.log());

// ps.addPet("test2", 3, 16, "huy")

// ps.addPet('test2', 3, 16, 'husky')
// ps.addPet('test2', 3, 16, 'husky')
// ps.addPet('test2', 3, 16, 'husky')
// ps.addPet('test2', 3, 16, 'husky')
// ps.addPet('test2', 3, 16, 'husky')

// ps.addPet('test', 3, 16, 'poodle')

// console.log(ps.pets);
// console.log(ps.pets[0]);
// console.log(ps.dogsCapacity);
// console.log(ps.addPet());