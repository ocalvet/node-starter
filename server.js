const app = require('express')();
const env = require('dotenv');
const userController = require('./controllers/users');
const bodyParser = require('body-parser');
env.config();
const port = process.env.APP_PORT || 6000;
// Middleware
app.use(bodyParser.json());

app.use('/api/users', userController);

app.listen(port, () => console.log(`Listening on ${port}`));
