import { type Request, type Response } from "express";
import axios from "axios";

const generatePrediction = async (req: Request, res: Response) => {
    try {
        const gameState = req.body.gameState; 
        const response = await axios.post(`${process.env.AI_URL}/predict`, {
            game_state: gameState
        });
        
        res.json({ bestMove: response.data.best_move });
    } catch (err) {
        res.status(500).send('Failed to get prediction');
    }
}

export { generatePrediction }