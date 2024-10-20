import express, { type Request, type Response } from "express";
const {
  getPrediction
} = require("../controllers/predictionController");

const predictionRouter = express.Router(); 

predictionRouter.get("/", (req: Request, res: Response) => {
  getPrediction(req, res);
});

export { predictionRouter };