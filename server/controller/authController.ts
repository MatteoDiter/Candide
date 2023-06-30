import { Request, Response, NextFunction } from "express";
import { Sample, User } from "../model/mongoDB";

const authController: any = {};

// signup user - add to the database
authController.addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const newUser = await User.create({ email, password });

    res.locals.user = newUser;
    return next();
  } catch (err) {
    return next({
      log: `addUser: ERROR: ${err}`,
      message: { err: "Error occurred in addUser controller." },
    });
  }
};

export default authController;
