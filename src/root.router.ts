import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './utils/swagger/swagger.setup';

import { NODE_ENV } from './config';

// import AuthRouter from './modules/auth/auth.router';

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

    // this.router.use('/auth', new AuthRouter().router);

    this.router.get('/version', (req, res) => res.json({ version: 1 }));
  }
}
