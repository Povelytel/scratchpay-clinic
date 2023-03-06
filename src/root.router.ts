import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './utils/swagger/swagger.setup';

import { NODE_ENV } from './config';

import SearchRouter from './modules/search/search.router';

export default class RootRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.routes();
  }

  public routes(): void {
    if (NODE_ENV !== 'production') {
      this.router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
    }

    this.router.use('/search', new SearchRouter().router);

    this.router.get('/version', (req, res) => res.json({ version: 1 }));
  }
}
