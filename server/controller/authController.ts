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
      statusCode: 500,
    });
  }
};

// login user - check if inputs match the database
authController.loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    // Retrieve the user from the database based on the email
    const user = await User.findOne({ email });
    // If the user doesn't exist or the password doesn't match, return an error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next({
        log: "loginUser: ERROR: Invalid email or password",
        message: { err: "Invalid email or password" },
        statusCode: 401, // Unauthorized status code
      });
    }
    // Else Login successful
    return next();
  } catch (err) {
    return next({
      log: `loginUser: ERROR: ${err}`,
      message: { err: "Error occurred in loginUser controller." },
      statusCode: 500,
    });
  }
};

export default authController;
