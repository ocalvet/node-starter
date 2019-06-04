import express from 'express';
import env from 'dotenv';
import middleware from './utils/middleware';
import errorHandling from './utils/errorHandling';
import router from './controllers/users';
const app = express();

env.config();
const port = process.env.APP_PORT || 2112;
// Middleware
middleware(app);
// Controllers
app.use('/api/users', router);
// Error Handling
errorHandling(app);
// Start App
app.listen(port, () => console.log(`Listening on ${port}`));
