const { assert } = require('chai');
const facts = require('../lib/http-facts');

describe('Getting a fact', () => {
    it('Get a random fact', () => {
        const fact = facts.randomFact();

        assert.ok(/HTTP/.test(fact.fact));
    });
});