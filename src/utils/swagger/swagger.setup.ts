import { URL } from 'url';

import { BASE_URL } from '../../config';

import { searchSwagger } from '../../modules/search/swagger';
import { searchSchema } from '../../modules/search/swagger/search.schema';

export default {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'APIs Document for clinic search',
  },
  servers: [
    {
      url: new URL('/api/v1', BASE_URL),
    },
  ],
  components: {
    schema: Object.assign({}, searchSchema),
  },
  paths: Object.assign({}, searchSwagger),
};
