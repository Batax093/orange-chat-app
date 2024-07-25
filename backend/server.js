import express from 'express';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import connectToMongoDB from './db/connect-to-mongo.js';

import authRoutes from "./routes/auth-routes.js";
import messageRoutes from "./routes/message-routes.js";
import userRoutes from "./routes/user-routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config()

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);
  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectToMongoDB();
});
