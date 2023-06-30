import { Request, Response, NextFunction } from "express";
import { Sample, User } from "../model/mongoDB";
import bcrypt from "bcrypt";

const authController: any = {};

// signup user - add to the database
authController.addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    res.locals.user = await User.create({ email, password: hashedPassword });
    return next();
  } catch (err) {
    return next({
      log: `addUser: ERROR: ${err}`,
      message: { err: "Error occurred in addUser controller." },
    });
  }
};

export default authController;
