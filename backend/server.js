import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config(); // Load environment variables

app.use(express.json()); // to parse data from the inocming request
app.use(cookieParser());
// Authentication Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Default Route
// app.get("/", (req, res) => {
//     res.send("Hello Karan!");
// });

// Start Server & Connect to DB
app.listen(PORT, async () => {
    await connectToMongoDB(); // Ensure DB connection before serving requests
    console.log(`App is listening on port ${PORT}`);

});
