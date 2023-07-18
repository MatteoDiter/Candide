import { Router, Request, Response } from "express";
import path from "path";

// controllers
import sampleController from "../controller/sampleController";
import authController from "../controller/authController"; // signup controller

const router: Router = Router();

// Serve index.html for all other routes to enable client-side routing
router.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

// POST // WORKING TESTED ON POSTMAN
router.post(
  "/add-item",
  sampleController.addItem,
  (req: Request, res: Response) => {
    console.log("item added");
    res.status(200).json(res.locals);
  }
);

// GET // WORKING TESTED ON POSTMAN
router.get(
  "/get-item",
  sampleController.getItem,
  (req: Request, res: Response) => {
    console.log("getting items");
    res.status(200).json(res.locals);
  }
);

// sign up
router.post(
  "/signup",
  authController.addUser,
  (req: Request, res: Response) => {
    console.log("User signed up");
    res.status(200).json(res.locals);
  }
);

// login
router.post(
  "/login",
  authController.loginUser,
  (req: Request, res: Response) => {
    console.log("User logged in");
    res.sendStatus(200);
  }
);

export default router;
