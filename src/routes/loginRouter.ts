import express, { type Request, type Response } from "express";
const {
  checkUser,
  createUser
} = require("../controllers/loginController");

const loginRouter = express.Router(); // Creates a new router object

loginRouter.get("/", (req: Request, res: Response) => {
  checkUser(req, res); 
})

loginRouter.post("/create-user", (req: Request, res: Response) => {
  createUser(req, res);
});

export { loginRouter };