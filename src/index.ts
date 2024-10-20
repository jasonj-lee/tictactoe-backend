import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv"; 
import cors from "cors";
import { userRouter } from "./routes/userRouter"; 
import { connectDB } from "../config/database";
import { predictionRouter } from "./routes/predictionRouter";
import { loginRouter } from "./routes/loginRouter";

dotenv.config();
connectDB();

const app: Express = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: ['http://localhost:4200'], // Add your frontend origins here
    credentials: true, // This is important for cookies, authorization headers with HTTPS
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify the methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify the headers allowed
};

app.use(cors(corsOptions)); // Use the updated CORS configuration

app.use(express.json()); // Parses incoming JSON requests and uts the parsed data in req
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with urlenconded payloads

app.use("/user", userRouter); 
app.use("/prediction", predictionRouter)
app.use("/login", loginRouter)

app.get("/", (_req: Request, res: Response) => {
    res.send("Server is up!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});