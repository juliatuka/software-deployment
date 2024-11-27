const { app } = require('@azure/functions');

const helloHandler = async (request, context) => {
    return { body: 'Hello NOOOOO Julia here!' };
};

module.exports = helloHandler;

app.http('hello', {
    methods: ['POST', 'GET'],
    handler: helloHandler
});