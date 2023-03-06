import { Request } from 'express';

export const getQuery = ({ query }: Request) => query;

export const getBody = ({ body }: Request) => body;
