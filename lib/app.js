const { parse } = require('url');
const defaultGreeting = require('./default-greeting');

module.exports = (req, res) => {
    const {pathname, query } = parse(req.url, true);

    if(pathname === `/greeting`) {
        res.end(defaultGreeting(query.salutation));
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`Apologies. We appear to be unable to <strong>${req.method} ${req.url}</strong>`);
    }
};