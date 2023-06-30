import { Request, Response, NextFunction } from "express";
import { Sample, User } from "../model/mongoDB";

const authController: any = {};

// signup user - add to the database
authController.addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body); // <-- Add this line
  try {
    const { email, password } = req.body;

    res.locals.user = await User.create({ email, password });
    return next();
  } catch (err) {
    return next({
      log: `addUser: ERROR: ${err}`,
      message: { err: "Error occurred in addUser controller." },
    });
  }
};

export default authController;
