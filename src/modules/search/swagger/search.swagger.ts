import { searchSchema } from './search.schema';

const tags = ['Search'];

const getSearch = {
  get: {
    summary: 'get all items find by search value | [ For all ]',
    tags,
    parameters: [
      {
        name: 'search',
        in: 'query',
        required: false,
        default: '',
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Successfully get all items by search!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                items: {
                  type: 'array',
                  items: searchSchema,
                },
              },
            },
          },
        },
      },
    },
  },
};

export default {
  '/search': Object.assign({}, getSearch),
};
