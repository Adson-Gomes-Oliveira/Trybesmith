import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/product.interface';
import IReturn from '../interfaces/service.returns';
import IError from '../interfaces/error.interface';
import productService from '../services/product.service';
import CustomError from '../helpers/custom.error';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const data: IReturn = await productService.getAll();
  return res.status(data.code).json(data.data);
}

async function create(req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
  try {
    const payload: IProduct<number> = req.body;
    const data: IReturn | IError = await productService.create(payload);
    
    if (data.message) throw new CustomError(data);

    return res.status(data.code).json(data.data);
  } catch (error) {
    next(error);
  }
}

export default {
  getAll,
  create,
};
