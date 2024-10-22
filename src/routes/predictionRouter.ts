import express, { type Request, type Response } from "express";
const {
  generatePrediction
} = require("../controllers/predictionController");

const predictionRouter = express.Router(); 

predictionRouter.post("/", (req: Request, res: Response) => {
  generatePrediction(req, res);
});

export { predictionRouter };