import path from "path";
import express from "express";
import dotenv from "dotenv";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server} from './socket/socket.js'


const PORT = process.env.PORT || 8000;

const __dirname = path.resolve()

dotenv.config(); // Load environment variables

app.use(express.json()); // to parse data from the inocming request
app.use(cookieParser());
// Authentication Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})


// Start Server & Connect to DB
server.listen(PORT, async () => {
    await connectToMongoDB(); // Ensure DB connection before serving requests
    console.log(`App is listening on port ${PORT}`);

});
