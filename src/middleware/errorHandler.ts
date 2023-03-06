import { Request, Response, NextFunction } from 'express';
import * as localizations from '../utils/localizations';

export const routeNotFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({ message: localizations['en'].ERRORS.OTHER.NOT_FOUND_ENDPOINT });
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { message, status } = err;

  switch (err.name) {
    case 'UnauthorizedError':
      return res.status(401).json({
        error: localizations['en'].ERRORS.OTHER.UNAUTHORIZED,
      });

    default:
      return res.status(status || 500).json({ message });
  }
};
