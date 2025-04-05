import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from './routes/taskRoutes.js';
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL || "https://to-do-application-next-node.vercel.app",
    credentials: true,
}));
connectDB();
app.use("/api/auth", authRoutes);
app.use('/api/tasks', taskRoutes);
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something went wrong!",
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map