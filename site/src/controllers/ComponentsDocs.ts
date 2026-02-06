import { Request, Response } from 'express';

export const getComponentsDocsController = (req: Request, res: Response) => {
  res.render('components-docs');
};
