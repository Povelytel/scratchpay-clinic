export const NODE_ENV: string = process.env.NODE_ENV || 'local';

export const BASE_URL: string = process.env.BASE_URL || 'http://localhost:4000';
export const PORT: number = parseInt(process.env.PORT) || 4000;

export default process.env;
