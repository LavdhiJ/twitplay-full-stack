// src/app.js
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

console.log("📦 Creating Express App...");

const app = express();

console.log("⚙️ Setting up middleware...");

// CORS Configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN === "*" ? true : process.env.CORS_ORIGIN,
    credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

console.log("📁 Importing routes...");

// Routes import
import aboutRouter from "./routes/about.route.js";
import commentRouter from "./routes/comment.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import likeRouter from "./routes/like.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import userRouter from './routes/user.routes.js';
import videoRouter from "./routes/video.routes.js";

console.log("🔄 Setting up request logging...");

// Request logging middleware
app.use((req, res, next) => {
    console.log(`📝 [${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

console.log("🛣️ Mounting API routes...");

// API routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tweets", tweetRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/like", likeRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/about", aboutRouter);

console.log("🏠 Setting up root route...");

// Root route
app.get("/", (req, res) => {
    console.log("🎯 Root route accessed!");
    res.status(200).send("✅ TwitPlayy Backend is up and running!");
});


console.log("🚫 Setting up 404 handler...");

// 404 fallback
app.use((req, res) => {
    console.log(`❌ 404 Error: ${req.method} ${req.originalUrl}`);
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.originalUrl,
        timestamp: new Date().toISOString()
    });
});

console.log("✅ Express app configured successfully!");

export { app };