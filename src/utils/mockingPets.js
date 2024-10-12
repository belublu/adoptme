import { faker } from '@faker-js/faker'

const generatePets = (number) => {
    const pets = []

    for (let i = 0; i < number; i++) {
        const birthDate= faker.date.birthdate({min: 1, max: 25, mode: "age"})
        const formattedBirthDate = birthDate.toLocaleDateString('es-AR')

        const pet = {
            name: faker.animal.dog(),
            specie: faker.animal.type(),
            birthDate: formattedBirthDate,
            adopted: false
        }
        pets.push(pet)
    }
    return pets
}

export default generatePets

