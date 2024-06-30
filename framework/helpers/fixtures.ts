import { faker } from '@faker-js/faker';

const randomString = {
    uuid: () => {
        return faker.string.uuid()
    },
    alpha: () => {
        return faker.string.alpha({ length: { min: 10, max: 15 } })
    },
    number: () => {
        return faker.string.numeric({ length: { min: 10, max: 15 } })
    }
}

export default randomString;
