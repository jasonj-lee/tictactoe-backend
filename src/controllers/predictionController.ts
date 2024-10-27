import { type Request, type Response } from "express";
import axios from "axios";

const generatePrediction = async (req: Request, res: Response) => {
    try {
        const { gameState } = req.body; 
        const response = await axios.post(`${process.env.AI_URL}/predict`, {
            game_state: gameState
        });
        
        res.json({ cellInd: response.data.best_move.cellInd, gridInd: response.data.best_move.gridInd });
    } catch (err) {
        res.status(500).send('Failed to get prediction');
    }
}

export { generatePrediction }