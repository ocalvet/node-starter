const app = require('express')();
const userController = require('./controllers/users');
const port = process.env.APP_PORT || 6000;

app.use('/api/users', userController);

app.listen(port, () => console.log(`Listening on ${port}`));
