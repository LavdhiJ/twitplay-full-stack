// src/index.js
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Load environment variables FIRST
dotenv.config({
    path: "./.env"
});

console.log("🚀 TwitPlayy Backend Starting...");
console.log("📍 Node Environment:", process.env.NODE_ENV);
console.log("🔌 Port:", process.env.PORT);
console.log("🌐 CORS Origin:", process.env.CORS_ORIGIN);

// Connect to database first, then start server
connectDB()
    .then(() => {
        console.log("✅ MongoDB Connected Successfully!");
        
        const PORT = process.env.PORT || 3001;
        
        // Start the server
        const server = app.listen(PORT, '0.0.0.0', () => {
            console.log(`🌟 Server running on port: ${PORT}`);
            console.log(`🔗 Server URL: ${process.env.NODE_ENV === 'production' ? 'https://twitplayy-backend.onrender.com' : `http://localhost:${PORT}`}`);
            console.log("🎉 TwitPlayy Backend Ready!");
        });

        // Handle server errors
        server.on('error', (error) => {
            console.error('❌ Server Error:', error);
            process.exit(1);
        });

        // Graceful shutdown
        process.on('SIGTERM', () => {
            console.log('👋 Received SIGTERM, shutting down gracefully...');
            server.close(() => {
                console.log('💤 Server closed');
                process.exit(0);
            });
        });
    })
    .catch((error) => {
        console.error("❌ Database connection failed:", error);
        console.error("❌ Error details:", error.message);
        process.exit(1);
    });