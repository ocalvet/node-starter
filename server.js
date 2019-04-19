const app = require('express')();
const env = require('dotenv');
const userController = require('./controllers/users');
const middleware = require('./utils/middleware');
env.config();
const port = process.env.APP_PORT || 6000;
// Middleware
middleware(app);

app.use('/api/users', userController);

app.listen(port, () => console.log(`Listening on ${port}`));
