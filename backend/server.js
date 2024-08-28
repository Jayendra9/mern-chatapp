import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDb from "./db/connectToMongoDB.js";

dotenv.config(); 
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 4000;

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`);
})