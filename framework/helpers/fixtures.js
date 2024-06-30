"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const randomString = {
    uuid: () => {
        return faker_1.faker.string.uuid();
    },
    alpha: () => {
        return faker_1.faker.string.alpha({ length: { min: 10, max: 15 } });
    },
    number: () => {
        return faker_1.faker.string.numeric({ length: { min: 10, max: 15 } });
    }
};
exports.default = randomString;
