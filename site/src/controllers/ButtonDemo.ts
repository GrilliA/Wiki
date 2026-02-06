import { Request, Response } from 'express';

export const getButtonDemoController = (req: Request, res: Response) => {
  res.render('button-demo');
};
