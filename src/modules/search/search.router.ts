import actionHandler from '../../middleware/actionHandler';

import { BaseRouter } from '../../utils/base';
import * as mapProperty from '../../utils/interfaces';

import { SearchController } from './';

export default class SearchRouter extends BaseRouter {
  private searchController: SearchController;

  constructor() {
    super();

    this.searchController = new SearchController();
    this.routes();
  }

  public routes(): void {
    this.router.get('/', actionHandler(this.searchController.getSearch, mapProperty.getQuery));
  }
}
