import express, { type Request, type Response } from "express";
const {
  createUser,
  getUsers,
} = require("../controllers/usersController");

const userRouter = express.Router(); // Creates a new router object

userRouter.post("/", (req: Request, res: Response) => {
  createUser(req, res); 
})

userRouter.get("/", (req: Request, res: Response) => {
  getUsers(req, res);
});

export { userRouter };