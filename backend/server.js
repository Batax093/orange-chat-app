import express from 'express';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

import connectToMongoDB from './db/connect-to-mongo.js';

import authRoutes from "./routes/auth-routes.js";
import messageRoutes from "./routes/message-routes.js";
import userRoutes from "./routes/user-routes.js";

import { app, server } from './socket/socket.js';

const __dirname = path.resolve();

dotenv.config()

const PORT = process.env.PORT || 5000;

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectToMongoDB();
});
