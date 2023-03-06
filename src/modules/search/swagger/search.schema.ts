export const searchSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', required: true },
    state: { type: 'string', required: true },
    availability: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          from: { type: 'string', required: true },
          to: { type: 'string', required: true },
        },
      },
    },
  },
};
