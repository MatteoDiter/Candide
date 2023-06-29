import { Request, Response, NextFunction } from "express";
import Sample from "../model/mongoDB";

const sampleController: any = {};

// POST ITEM // WORKING TESTED ON POSTMAN
sampleController.addItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // log the body
    console.log(req.body);
    const { description } = req.body;
    // create entry
    res.locals.addItem = await Sample.create({ description });
    return next();
  } catch (err) {
    return next({
      log: `addItem: ERROR: ${err}`,
      message: { err: "Error occurred in addItem controller." },
    });
  }
};

// GET ITEMS // WORKING TESTED ON POSTMAN
sampleController.getItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const items = await Sample.find({}).exec();
    // log items
    console.log(items);
    // store in locals
    res.locals.items = items;
    return next();
  } catch (err) {
    return next({
      log: `getItem: ERROR: ${err}`,
      message: { err: "Error occurred in getItem controller." },
    });
  }
};

export default sampleController;
