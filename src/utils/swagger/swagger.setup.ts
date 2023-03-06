import { PORT, BASE_URL } from '../../config';
import { URL } from 'url';

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
    {
      url: `http://localhost:${PORT}/api/v1`,
    },
  ],
  security: [
    {
      bearerAuth: ['read', 'write'],
    },
  ],
};
