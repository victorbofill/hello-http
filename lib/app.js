const { parse } = require('url');
const defaultGreeting = require('./default-greeting');
const facts = require('./http-facts');

module.exports = (req, res) => {
    const {pathname, query } = parse(req.url, true);

    if(pathname.startsWith(`/greeting`)) {
        const name = pathname.slice(1).split('/')[1];
        res.end(defaultGreeting(query.salutation, name));
    }

    else if(pathname === `/fact`) {
        res.setHeader('Content-Type', 'application/json');
        const fact = facts.randomFact();
        res.end(JSON.stringify(fact));
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`Apologies. We can't fulfill your request.`);
    }
};