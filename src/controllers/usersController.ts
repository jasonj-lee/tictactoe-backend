const User = require("../models/User");

import { type Request, type Response } from "express";


const createUser = async (req: Request, res: Response) => {
    try {
        const { firebaseUid, name } = req.body; 

        const newUser = new User({ 
            firebaseUid: firebaseUid, 
            name: name
         });
        await newUser.save(); 

        return res.status(200).json(newUser); 
    } catch (err: any) {
        console.error(err.message); 
        return res.status(400).send({ message: err.message }); 
    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (err: any) {
        console.error(err.message); 
        return res.status(400).send({ message: err.message }); 
    }
}

export { createUser, getUsers }