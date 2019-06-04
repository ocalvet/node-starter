
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { customMiddleware } from './customMiddleware';

export default app => {
  app.use(bodyParser.json());
  app.use(morgan('common'));
  app.use(cors());
  app.use(helmet());
  app.use(customMiddleware);
};