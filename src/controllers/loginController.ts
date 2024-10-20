const User = require("../models/User")
import { type Request, type Response } from "express"; 
import admin from "../../config/firebase-config"; 

const checkUser = async (req: Request, res: Response) => {
    try {
        const { idToken } = req.body;
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const firebaseUid = decodedToken.uid; 

        if (!firebaseUid)
            return res.status(400).send({ message: "firebaseUid not found in request" });

        
        let user = await User.findOne({ firebaseUid: firebaseUid }); 
        if (user) 
            return res.status(200).send({ data: user });

        return res.status(400).send({ message: "User not found" }); 
    } catch (err: any) {
        return res.status(400).send({ error: err.message });
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User({ ...req.body }); 
        await newUser.save(); 
        return res.status(200).json(newUser); 
    } catch (err: any) {
        return res.status(400).send({ message: err.message });
    }
}

export { checkUser, createUser }