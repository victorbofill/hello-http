const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('HTTP App Tests', () => {
    it(`Responds 'Hello, stranger!' with empty GET`, () => {
        return chai.request(app)
            .get('/greeting')
            .then(response => {
                assert.equal(response.text, 'Hello, stranger!');
            });
    });

    it(`Responds with custom name and greeting`, () => {
        return chai.request(app)
            .get('/greeting/Victor?salutation=Sup')
            .then(response => {
                assert.equal(response.text, 'Sup, Victor!');
            });
    });

    it(`Provides a random fact from /fact`, () => {
        return chai.request(app)
            .get('/fact')
            .then(res => {assert.ok(/HTTP/.test((JSON.stringify(res.body))));
            });
    });

    it('Ensures proper 404 functionality', () => {
        return chai.request(app)
            .get('/bad')
            .then((res) => {
                assert.equal(res.status, 404);
            });
    });
});