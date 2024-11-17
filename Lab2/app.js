import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello from Tukas SWD!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

