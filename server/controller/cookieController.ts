import { Request, Response, NextFunction } from "express";

const cookieController: any = {};

// COOKIE CONTROLLER
// Cookie controller - set session information in a cookie
cookieController.setSessionCookie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Assuming 'user' object available in res.locals after successful login
    const { email } = res.locals.user;

    const sessionData = {
      email,
    };

    // Convert the session data to JSON and create a base64 string
    const sessionDataString = JSON.stringify(sessionData);
    const sessionDataBase64 = Buffer.from(sessionDataString).toString("base64");

    // Set the cookie with the session data
    res.cookie("session", sessionDataBase64, {
      httpOnly: true, // Ensures the cookie is not accessible through JavaScript
      secure: true, // Enable this for HTTPS connections
      maxAge: 7 * 24 * 60 * 60 * 1000, // Max age of 1 week in ms
    });

    return next();
  } catch (err) {
    return next({
      log: `setSessionCookie: ERROR: ${err}`,
      message: { err: "Error occurred in setSessionCookie controller." },
      statusCode: 500,
    });
  }
};

export default cookieController;
