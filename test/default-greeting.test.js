const defaultGreeting = require('../lib/default-greeting');
const { assert } = require('chai');

describe('Default Greeting', () => {
    it(`Says 'Hello, stranger!'`, () => {
        assert.equal(defaultGreeting(), `Hello, stranger!`);
    });

    it(`Says customer salutation`, () => {
        assert.equal(defaultGreeting(`sup`), `sup, stranger!`);
    });
});